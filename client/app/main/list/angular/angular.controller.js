'use strict';

angular.module('uiApp')
  .controller('AngularCtrl', function (NgTableParams) {
    console.log('aaaa');
    var vm = this;

    var data = [
                {
                  name : 'Franklin' , 
                  age : 25
                },
                {
                  name : 'Roger' , 
                  age : 27
                }, 
                {
                  name : 'Ronald' , 
                  age : 25
                }, 
                {
                  name : 'Juan' , 
                  age : 45
                }, 
                {
                  name : 'Pedro' , 
                  age : 33
                }, 
                {
                  name : 'Roberto' , 
                  age : 76
                }
                ];

    vm.tableParams = new NgTableParams({},{dataset:data});

    vm.editUser = editUser;

    function editUser( user ){
      console.log('this is :' + JSON.stringify(user));
    };

  });
