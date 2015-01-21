angular.module('App', [])

.config(function ($provide) {
  'use strict';

  $provide.decorator('$exceptionHandler', function ($delegate) {
    return function (exception, cause) {
      alert(exception);

      $delegate(exception, cause);
    };
  });
})

.factory('backgroundPort', function () {
  'use strict';

  var port = chrome.runtime.connect({
    name: 'devtools'
  });

  return port;
})

.factory('less', function ($q, $window) {
  'use strict';

  var service = angular.extend({}, $window.less, {
    render: render
  });

  return service;

  //////////

  function render(input, options) {
    var dfd = $q.defer();

    $window.less
      .render(input, options)
      .then(dfd.resolve, dfd.reject);

    return dfd.promise;
  }
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
      .get('/vendors/bootstrap/less/bootstrap.less')
      .then(function (resp) {
        render(resp.data, {
          async: true,
          filename: '/vendors/bootstrap/less/bootstrap.less',
          modifyVars: modifyVars
        });
      }, function (resp) {
        alert('error');
      })
      .then(function () {
        vm.status = 'Done!';
      });
  }
});