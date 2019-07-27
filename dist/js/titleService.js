angular.module('myApp')

    .factory('titleService', function(){
        var titleName;

        function setTitle(title){
            titleName = title;
            title = 'AngularJs'
        }

        return {
            setTitle: setTitle
        }
    })