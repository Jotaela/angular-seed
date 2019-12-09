'use strict';

angular.module('header')
    .controller('headerController', ['$state', '$scope', '$mdSidenav', function headerController($state, $scope, $mdSidenav) {

        $scope.toggle = function (id) {
            $mdSidenav(id).toggle();
        };

        $scope.goTo = function (stateName) {
            $state.go(stateName);
            $scope.currentItem="";
        };

        $scope.$watch(function () {
            return $state.current.name;
        }, function (newValue, oldValue) {
            $scope.currentItem = newValue;
        });

    }]);
