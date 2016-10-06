'use strict';

angular.module('uiApp')
  .directive('myInput', function () {
    return {
      templateUrl: 'app/myInput/myInput.html',
      restrict: 'EAC',
      scope:{
        name : '='
      },
      link: function (scope, element, attrs) {
          
        console.log('variable:'+scope.name);
      }

    };
  });
