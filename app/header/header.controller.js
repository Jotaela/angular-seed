angular.module('header')
    .controller('headerController', ['$state', '$scope', function headerController($state, $scope) {
        $scope.currentItem = $state.current.name;
    }]);