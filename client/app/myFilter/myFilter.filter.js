'use strict';

angular.module('uiApp')
  .filter('myFilter', function () {
    return function (input,param) {
      console.log('myFilter:'+param);
      if(param === 'm')
        return 'myFilter filter: ' + input.toLowerCase();
      if(param === 'M')
        return 'myFilter filter: ' + input.toUpperCase();
      return 'myFilter filter: ' + input;
    };
  });
