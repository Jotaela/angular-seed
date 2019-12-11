'use strict';

angular.module('landing-page')
    .controller('landingPageController', [ '$scope', '$state',function primaryController($scope, $state) {
        $scope.goTo = function (stateName) {
            $state.go(stateName);
            $scope.currentItem="";
        };
    }]);
