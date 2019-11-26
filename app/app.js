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
    'components'
])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$mdThemingProvider',
        function ($stateProvider,
            $urlRouterProvider,
            $mdThemingProvider) {

            $stateProvider.state('landing-page', {
                url: '/',
                views: {
                    'primary': {
                        templateUrl: './pages/primary/primary.template.html',
                        controller: 'primaryController'
                    },
                    'header': {
                        templateUrl: './pages/header/header.template.html',
                        controller: 'headerController'
                    },
                    'menu': {
                        templateUrl: './pages/header/menu.template.html',
                        //controller: 'headerController'
                    }
                }
            }).state('landing-page.professors', {
                url: 'professors',
                views: {
                    'primaryx': {
                        templateUrl: './pages/professors/professors.template.html',
                        controller: 'professorsController'
                    }
                }
            }).state('landing-page.home', {
                url: 'home',
                views: {
                    'primaryx': {
                        templateUrl: './pages/home/home.template.html',
                        controller: 'homeController'
                    }
                }
            }).state('landing-page.alumnes', {
                url: 'alumnes',
                views: {
                    'primaryx': {
                        templateUrl: './pages/alumnes/alumnes.template.html',
                        controller: 'alumnesController'
                    }
                }
            });

            $urlRouterProvider.otherwise('/');


            $mdThemingProvider.theme('temaPrincipal').primaryPalette('blue')
                .accentPalette('yellow')
                .warnPalette('red')
                .backgroundPalette('grey');
            $mdThemingProvider.setDefaultTheme('temaPrincipal');
        }]);
