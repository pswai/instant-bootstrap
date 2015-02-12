angular
  .module('ibs.app', [
    'ibs.utils'
  ])

  .config(function ($provide) {
    'use strict';

    $provide.decorator('$exceptionHandler', function ($delegate) {
      return function (exception, cause) {
        alert(exception);

        $delegate(exception, cause);
      };
    });
  })

  .constant('versions', [
    '3.3.2',
    '3.3.1',
    '3.3.0',
    '3.2.0',
    '3.1.1',
    '3.1.0'
  ])

  .controller('MainCtrl', function ($anchorScroll, $http, $location, $scope, backgroundPort, less, versions) {
    'use strict';

    var vm = this;
    vm.defaultVars = {};
    vm.jumpToSection = jumpToSection;
    vm.status = 'Ready';
    vm.tabs = [];
    vm.modifyVars = {};
    vm.revert = revert;
    vm.update = update;
    vm.saveCss = saveCss;
    vm.saveVariables = saveVariables;
    vm.selectedVersion = versions[0];
    vm.versions = versions;

    activate();

    //////////

    function activate() {
      reloadSections(vm.selectedVersion);

      $scope.$watch('vm.selectedVersion', function (newVersion, oldVersion) {
        if (newVersion !== oldVersion) {
          reloadSections(newVersion);
        }
      });
    }

    function compileLess() {
      var url = '/bootstrap/' + vm.selectedVersion + '/less/bootstrap.less';
      var modifyVars = _.transform(vm.modifyVars, function (result, value, key) {
        result[key.slice(1)] = value;
      });

      return $http
        .get(url)
        .then(function (resp) {
          return less
            .render(resp.data, {
              async: true,
              filename: url,
              modifyVars: modifyVars
            })
        });
    }

    function jumpToSection(title) {
      $location.hash(title);
      $anchorScroll();
    }

    function reloadSections(version) {
      vm.tabs = [];
      vm.defaultVars = {};
      vm.modifyVars = {};

      $http
        .get('/bootstrap/' + version + '/config.json')
        .then(function (resp) {
          _.forEach(resp.data, function (variables, sectionName) {
            var section = {
              title: sectionName,
              vars: []
            };

            _.forEach(variables, function (value, key) {
              section.vars.push(key);

              // Setup default values as well
              vm.defaultVars[key] = value;
              vm.modifyVars[key] = value;
            });

            vm.tabs.push(section);
          });
        });
    }

    function revert(key) {
      vm.modifyVars[key] = vm.defaultVars[key];
    }

    function update() {
      vm.status = 'Compiling...';

      compileLess()
        .then(function (output) {
          backgroundPort.postMessage({
            tabId: chrome.devtools.inspectedWindow.tabId,
            css: output.css
          });

          vm.status = 'Ready';
        }, function () {
          vm.status = 'Error';
        });
    }

    function saveCss() {
      compileLess()
        .then(function (output) {
          var blob = new Blob([output.css], {
            type: 'text/plain'
          });

          saveFile('bootstrap.css', window.URL.createObjectURL(blob));
        });
    }

    function saveFile(filename, url) {
      var a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.dataset.downloadUrl = ['text/plain', a.download, a.href].join(':');
      a.click();
    }

    function saveVariables() {
      var str = _.reduce(vm.modifyVars, function (result, value, key) {
        return result + key + ': ' + value + ';\n';
      }, '');

      var blob = new Blob([str], {
        type: 'text/plain'
      });

      saveFile('variables.less', window.URL.createObjectURL(blob));
    }
  });