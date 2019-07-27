angular.module('myApp')

    .controller('homeController', ['$scope','$log', '$translate','$state',
        function($scope, $log, $translate, $state){
        var vm = this;
        vm.titleName = 'AngularJs';
        vm.query = '';

        active();

        function active(){

            $log.debug("NOw", _.now());

        }


        console.log("JSON PARSE", JSON.parse(localStorage.getItem('Users')));
        vm.array = JSON.parse(localStorage.getItem('Users'));

        

        vm.remove = function(person) {

            var currentPerson = _.findWhere(vm.array, {id: person.id});
            var index = _.findIndex(vm.array, currentPerson);
           
            vm.array.splice(index, 1);
            localStorage.setItem('Users',JSON.stringify(vm.array));
        };

        vm.changeLanguage = function (langKey) {
            $translate.use(langKey);
        };
        

        vm.show = function(model){

            var index = vm.array.indexOf(model);
            $state.go('edit', {model: model, id: index});
        }

        vm.propertyName = 'firstName';
        vm.reverse = true;

        vm.sortBy = function(propertyName) {
            vm.reverse = (vm.propertyName === propertyName) ? !vm.reverse : false;
            vm.propertyName = propertyName;
          };


    }]);