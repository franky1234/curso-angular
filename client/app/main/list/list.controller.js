'use strict';

angular.module('uiApp')
  .controller('ListCtrl', function ($state) {
    var vm = this;
    console.log('inside list');
                                            //estado asociado a la vista
    vm.tabs =[{title: 'Angular', index : 0 , state : 'angular'}, {title : 'Java', index : 1 , state : 'java' }] ;
    
    vm.select = select;

    function select(index){
      
        $state.go(vm.tabs[index].state);  //redireccionando a estados. angular , java

    };

  });
