angular.module('myApp')

    .factory('translateService', ['$translate', function($translate){
        var langKey;

        return {
            translate: translate
        }

        function translate(langKey) {
            $translate.use(langKey);
        };
    }])