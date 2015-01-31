angular.module('ibs.utils')

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
});