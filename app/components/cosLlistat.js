'use strict';

angular.module('components').
    component('cosLlistat', {
        templateUrl: '/components/cosLlistat.template.html',
        controller: function cosLlistatController($scope) {

        },
        bindings: {
            items: '<',
            error: '<',
            loading: '<',
            titol: '@'
        }
    });
