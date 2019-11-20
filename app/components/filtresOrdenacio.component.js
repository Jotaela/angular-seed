angular.module('professors').
    component('filtresOrdenacio', {
        templateUrl: '/components/filtresOrdenacio.template.html',
        controller: function cosLlistatController($scope) {
        },
        bindings: {
            filtre: '=',
            ordre: '=',
            opcions: '<'
        }
    });