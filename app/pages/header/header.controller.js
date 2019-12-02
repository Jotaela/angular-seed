'use strict';

angular.module('header')
    .controller('headerController', ['$state', '$scope', function headerController($state, $scope) {

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
