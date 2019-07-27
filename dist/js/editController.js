angular.module('myApp')

    .controller('editController', ['$scope', '$stateParams', '$state', '$translate',
        function($scope, $stateParams, $state, $translate){
            var vm = this;

            vm.title = "AngularJs";
            
            vm.users = [];

            vm.activate = function() {
                vm.array = JSON.parse(localStorage.getItem('Users'));
                vm.users = vm.array;
                
                vm.person = $stateParams.model;
                
            }

            vm.activate();
            
        
            vm.save = function(item) {
        
                var index = $stateParams.id;
                vm.person = $stateParams.model;
                console.log("Index", vm.person);
        
        
                vm.users[index] = item;
                localStorage.setItem('Users', JSON.stringify(vm.users));
                $state.go('home');
        
            }

            vm.changeLanguage = function (langKey) {
                $translate.use(langKey);
            };

            
    }])