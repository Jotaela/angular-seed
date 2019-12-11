'use strict';

angular.module('components').
    component('cosLlistat', {
        templateUrl: '/components/cosLlistat.template.html',
        controller: function cosLlistatController($scope) {
            $scope.refresh = function () {
                $scope.$emit('refresh');
            };
        },
        bindings: {
            items: '<',
            error: '<',
            loading: '<',
            titol: '@'
        }
    });
