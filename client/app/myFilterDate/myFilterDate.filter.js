'use strict';

angular.module('uiApp')
  .filter('myFilterDate', function () {
    return function (input) {
      
      return 'myFilterDate filter: ' + input.getDate() + '/' + (input.getMonth() + 1)  + '/' +  input.getFullYear();
    };
  });
