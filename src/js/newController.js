angular.module('myApp')

    .controller('newController', ['$scope', 'contactService','$location','$translate','$state',
        function($scope, contactService, $location, $translate,$state){        
            var vm = this;
        vm.title = 'AngularJs';
        //console.log('LOCAL: ',localStorage.getItem('Users'));
        vm.items = JSON.parse(localStorage.getItem('Users'));
       
        vm.array = [];
        if(vm.items !== null && vm.items.length > 0){
            vm.array = vm.items;
        }
        vm.person = {
            id: guid(),
            firstName: null,
            lastName: null,
            birthDay: null,
            birthPlace: null,
            sex: null
        }

        vm.createContact = function(){
           // if(vm.userForm.$invalid){
                //$scope.$broadcast('record:invalid');
            //    console.log('Form Invalid');
           // }else{
                vm.array.push(vm.person);
                localStorage.setItem('Users', JSON.stringify(vm.array));
                $state.go('home');
            //}
            
        }

        vm.changeLanguage = function (langKey) {
            $translate.use(langKey);
        };

        function guid() {
            function s4() {
              return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
          }
        

    }]);