angular.module('professors').
    component('cosLlistat', {
        templateUrl: '/components/cosLlistat.template.html',
        controller: function cosLlistatController($scope) {
            $scope.opcions = ['Nom', 'Cognom', 'Dni', 'Tel'];
        },
        bindings: {
            items: '<'
        }
    });