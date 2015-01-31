angular.module('ibs.utils')

.factory('backgroundPort', function () {
  'use strict';

  var port = chrome.runtime.connect({
    name: 'devtools'
  });

  return port;
});