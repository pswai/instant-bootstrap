angular.module('ibs.app', [
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

.controller('MainCtrl', function ($http, backgroundPort, defaultConfig, less, tabsConfig) {
  'use strict';

  var vm = this;
  vm.defaultVars = {};
  vm.status = '';
  vm.tabs = tabsConfig.tabs;
  vm.modifyVars = {};
  vm.revert = revert;
  vm.update = update;
  vm.saveVariables = saveVariables;

  activate();

  //////////

  function activate() {
    angular.forEach(defaultConfig.vars, function (value, key) {
      vm.defaultVars[key] = value;
      vm.modifyVars[key] = value;
    });
  }

  function render(input, options) {
    less
      .render(input, options)
      .then(function (output) {
        backgroundPort.postMessage({
          tabId: chrome.devtools.inspectedWindow.tabId,
          css: output.css
        });
      }, function (error) {
        vm.status = 'Error!';
      });
  }

  function revert(key) {
    vm.modifyVars[key] = vm.defaultVars[key];
  }

  function update() {
    vm.status = 'Compiling...';

    var modifyVars = _.transform(vm.modifyVars, function (result, value, key) {
      result[key.slice(1)] = value;
    });

    $http
      .get('/bootstrap/3.3.2/bootstrap.less')
      .then(function (resp) {
        render(resp.data, {
          async: true,
          filename: '/bootstrap/3.3.2/bootstrap.less',
          modifyVars: modifyVars
        });
      }, function (resp) {
        alert('error');
      })
      .then(function () {
        vm.status = 'Done!';
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