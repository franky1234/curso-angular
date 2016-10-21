'use strict';

angular.module('uiApp')
  .controller('JavaCtrl', function ($scope, $resource) {
    //http://ui-grid.info/  for references.
    var vm = this;
    console.log('inside java....');
    vm.students = $resource('/api/cursos/java');
    vm.allStudents = vm.students.get({},function(gizmo){
      //console.log('inside :'+JSON.stringify(gizmo));
      //$scope.gridOptions = {data : gizmo};
      vm.gridOptions = gizmo.students;
    }); 
    //console.log('its :'+ vm.gridOptions);
   /* vm.myData = [
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
  vm.gridOptions = {data : vm.myData };*/
  });
