'use strict';

angular.module('header')
    .controller('headerController', ['$state', '$scope', function headerController($state, $scope) {

        $scope.currentItem = $state.current.name;

        $scope.goTo = function (stateName) {
            $state.go(stateName);
            $scope.currentItem="";
        };

    }]);
