'use strict';

angular.module('secretaris')
    .controller('secretarisController', function secretarisController ($scope, secretarisAPI, $mdToast) {
        $scope.loadingCreate = false;
        $scope.loadingDelete = null;
        $scope.loadingBody = true;
        $scope.error = false;
        $scope.editing = null;

        $scope.$on('removed', deleteSecretari);
        $scope.$on('updated', updateSecretari);
        $scope.$on('created', crearSecretari);
        $scope.$on('refresh', fresh);

        function fresh () {
            $scope.loadingBody = true;
            $scope.error = false;
            secretarisAPI.get().then(function (response) {
                $scope.error = false;
                $scope.secretaris = response.data;
                $scope.loadingBody = false;
                $scope.loadingCreate = false;
                $scope.editing = null;
            }, function (error) {
                $scope.loadingBody = false;
                $scope.error = true;
            });
        }
        fresh();

        function crearSecretari(event, isValid, nouProfe) {
            if (isValid) {
                $scope.loadingCreate = true;
                secretarisAPI.post(nouProfe).then(function (response) {
                    fresh();
                    ToastCreate();
                }, function (error) {
                    $scope.error = true;
                    $scope.loadingCreate = false;
                });
            }
        }

        function deleteSecretari(event, id){
            $scope.loadingDelete = id;
            secretarisAPI.delete(id).then(function (response) {
                fresh();
                ToastDelete();
            }, function (error) {
                $scope.error = true;
            });
        }


        function updateSecretari(event, id, canviProfessor) {
            secretarisAPI.update(id, canviProfessor).then(function (response) {
                fresh();
                ToastUpdate();
            }, function (error) {
                $scope.error = true;
            });
        }

        // TOAST

        var last = {
            bottom: false,
            top: true,
            left: false,
            right: true
        };

        var toastPosition = angular.extend({}, last);

        var getToastPosition = function () {
            sanitizePosition();

            return Object.keys(toastPosition)
                .filter(function (pos) {
                    return toastPosition[pos];
                }).join(' ');
        };

        var sanitizePosition = function () {
            var current = toastPosition;

            if (current.bottom && last.top) {
                current.top = false;
            }
            if (current.top && last.bottom) {
                current.bottom = false;
            }
            if (current.right && last.left) {
                current.left = false;
            }
            if (current.left && last.right) {
                current.right = false;
            }

            last = angular.extend({}, current);
        };

        var ToastCreate = function () {
            var pinTo = getToastPosition();

            $mdToast.show(
                $mdToast.simple()
                    .textContent('S\'ha creat el professor!')
                    .position(pinTo)
                    .hideDelay(3000));
        };

        var ToastDelete = function () {
            var pinTo = getToastPosition();

            $mdToast.show(
                $mdToast.simple()
                    .textContent('S\'ha esborrat el professor!')
                    .position(pinTo)
                    .hideDelay(3000));
        };

        var ToastUpdate = function () {
            var pinTo = getToastPosition();

            $mdToast.show(
                $mdToast.simple()
                    .textContent('S\'ha actualitzat el professor!')
                    .position(pinTo)
                    .hideDelay(3000));
        };
    });
