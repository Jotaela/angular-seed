'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'home',
    'header',
    'primary',
    'professors',
    'alumnes',
    'prova',
])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$mdThemingProvider',
        function ($stateProvider,
            $urlRouterProvider,
            $mdThemingProvider) {

            $stateProvider.state('layout', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: './header/header.template.html',
                        controller: 'headerController'
                    },
                    'menu': {
                        templateUrl: './header/menu.template.html',
                        //controller: 'headerController'
                    },
                    'primary': {
                        templateUrl: './primary/primary.template.html',
                        controller: 'primaryController'
                    }
                }
            }).state('professors', {
                url: '/professors',
                views: {'header': {
                        templateUrl: './header/header.template.html',
                        controller: 'headerController'
                    },
                    'menu': {
                        templateUrl: './header/menu.template.html',
                        //controller: 'headerController'
                    },
                    'primary': {
                        templateUrl: './professors/professors.template.html',
                        controller: 'professorsController'
                    }
                }
            }).state('layout.home', {
                url: 'home',
                views: {
                    home: {
                        templateUrl: './home/home.template.html',
                        controller: 'homeController'
                    }
                }
            }).state('alumnes', {
                url: '/alumnes',
                views: {
                    'primary': {
                        templateUrl: './alumnes/alumnes.template.html',
                        controller: 'alumnesController'
                    }
                }
            }).state('layout.prova', {
                url: '/prova',
                views: {
                    alumnes: {
                        templateUrl: './prova/prova.template.html',
                        controller: 'provaController'
                    }
                }
            });

            $urlRouterProvider.otherwise('home');


            $mdThemingProvider.theme('temaPrincipal').primaryPalette('blue')
                .accentPalette('yellow')
                .warnPalette('red')
                .backgroundPalette('grey');
            $mdThemingProvider.setDefaultTheme('temaPrincipal');
        }]);
