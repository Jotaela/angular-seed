'use strict';

angular.module('components').
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
