'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'home',
    'header',
    'menu',
    'landing-page',
    'professors',
    'alumnes',
    'grafica',
    'components',
    'secretaris'
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
                        templateUrl: './pages/landingPage/landingPage.template.html',
                        controller: 'landingPageController'
                    },
                    'header': {
                        templateUrl: './pages/header/header.template.html',
                        controller: 'headerController'
                    },
                    'menu': {
                        templateUrl: './pages/menu/menu.template.html',
                        controller: 'menuController'
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
            }).state('landing-page.grafica', {
                url: 'grafica',
                views: {
                    'primaryx': {
                        templateUrl: './pages/grafica/grafica.template.html',
                        controller: 'graficaController'
                    }
                }
            }).state('landing-page.secretaris', {
                url: 'secretaris',
                views: {
                    'primaryx': {
                        templateUrl: './pages/secretaris/secretaris.template.html',
                        controller: 'secretarisController'
                    }
                }
            });

            $urlRouterProvider.otherwise('/');


            $mdThemingProvider.theme('temaPrincipal').primaryPalette('blue')
                .accentPalette('orange')
                .warnPalette('red')
                .backgroundPalette('grey');
            $mdThemingProvider.setDefaultTheme('temaPrincipal');
        }]);
