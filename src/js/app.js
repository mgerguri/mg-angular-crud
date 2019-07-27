var app = angular.module('myApp', ['ui.router', 'pascalprecht.translate', 'ngMessages']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when("", "/home")
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home.html',
            controller: 'homeController',
            controllerAs:'vm',
        })

        .state('newcontact', {
            url: '/newcontact',
            templateUrl: 'pages/newcontact.html',
            controller: 'newController',
            controllerAs:'vm',
        })

        .state('edit', {
            url: '/edit',
            templateUrl: 'pages/editcontact.html',
            controller: 'editController',
            controllerAs:'vm',
            params: {
                model: null,
                id: null
            }
        })
}]);


app.config(['$translateProvider', function ($translateProvider) {
    var trEnglish = {
        LIST_TITLE : 'List',
        NEW_CONTACT : 'New Contact',
        EDIT_CONTACT: 'Edit Contact',
        FIRST_NAME : 'First Name',
        HOME_PAGE: 'Home Page',
        CREATE_NEW_CONTACT: 'Create a New Contact',
        LAST_NAME: 'Last Name',
        BIRTH_DAY: 'Birthday',
        BIRTH_PLACE: 'Birthplace',
        SAVE: 'SAVE CONTACT',
        EDIT: 'Edit',
        SEX: 'Sex',
        MALE: 'Male',
        FEMALE: 'Female',
        DELETE: 'Delete',
        USER_ID: 'User Id',
        BUTTON_LANG_AL: 'Al',
        BUTTON_LANG_EN: 'En'
    }
    

    var trShqip = {
        LIST_TITLE: 'Lista',
        NEW_CONTACT : 'Shto Kontakt',
        EDIT_CONTACT: 'Edito Kontaktin',
        HOME_PAGE: 'Kthehu',
        CREATE_NEW_CONTACT: 'Shto kontakt te ri',
        FIRST_NAME : 'Emri',
        LAST_NAME: 'Mbiemri',
        BIRTH_DAY: 'Ditelindja',
        BIRTH_PLACE: 'Vendlindja',
        SAVE: 'RUAJ',
        EDIT: 'Ndrysho',
        SEX: 'Gjinia',
        MALE: 'Mashkull',
        FEMALE: 'Femer',
        DELETE: 'Fshije',
        USER_ID: 'Nr.',
        BUTTON_LANG_AL: 'Al',
        BUTTON_LANG_EN: 'En'
    }
    
    $translateProvider.translations('en', trEnglish);
    $translateProvider.translations('al', trShqip);
    $translateProvider.preferredLanguage('en');
   
    
  }]);