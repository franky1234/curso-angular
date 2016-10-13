'use strict';

angular.module('uiApp')
  .controller('JavaCtrl', function () {
    //http://ui-grid.info/  for references.
    var vm = this;

    vm.myData = [
                  { 
                    name : 'Pepe' , 
                    age : 20 
                  },
                  { 
                    name : 'Lucho' , 
                    age : 44 
                  },
                  {
                     name : 'Dybu' , 
                     age : 32 
                    },
                    { 
                      name : 'Jhon' , 
                      age : 25 
                    }
                    ];
  vm.gridOptions = {data : vm.myData };
  });
