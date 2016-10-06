'use strict';

angular.module('uiApp')
  .controller('DirectivesCtrl', function ($filter) {
    var vm = this;

    vm.message = 'success';
    // vm.showMenu = true;
    vm.show = true;
    vm.showMenu = function(){
      vm.show = !vm.show;
      return vm.show;
    };
    
    vm.items = function(){

      return  ['name','lastname','password'];
    };
    console.log(vm.items());
    vm.selection = vm.items()[0];
    
    vm.timeNow = new Date();
    vm.myObject = {
      name : 'Juan',
      age : 25,

    };

    vm.price = 50;

    vm.users = [{name : 'franklin1', age : 12},{name : 'franklin2' , age : 8},{name :  'franklin3' , age : 1},{name :  'franklin4' , age : 25 },{name :  'franklin5' , age : 33 },
                {name :  'franklin6', age : 65},{name :  'franklin7', age : 6},{name :  'franklin8', age : 11},{name :  'franklin9', age : 5},{name :  'franklin10', age : 56},
                {name : 'franklin11'},{name :  'franklin12'},{name :  'franklin13'},{name :  'franklin14'},{name :  'franklin15'},
                ];
   console.log('its:'+vm.users[0]);

   vm.filtered = $filter('myFilter')(vm.message,'m');  //haciendo referencia a nuestro filter
   vm.myDate = $filter('myFilterDate')(vm.timeNow);
   
   vm.filterLower = $filter('uppercase')(vm.message);
   vm.filterDate = $filter('date')(vm.timeNow, 'dd-MM-yyyy:HH:mm:ss', '-0400');
  });
