'use strict';

angular.module('alumnes')
    .controller('alumnesController', [
        '$scope',
        '$mdDialog',
        '$mdToast',
        'alumnesAPI',
        function alumnesController(
            $scope,
            $mdDialog,
            $mdToast,
            alumnesAPI
        ) {
            $scope.loadingCreate = false;
            $scope.loadingDelete = null;
            $scope.loadingBody = true;
            $scope.error = false;
            $scope.editing = null;

            $scope.$on('removed', deleteAlumne);
            $scope.$on('updated', updateAlumne);
            $scope.$on('created', crearAlumne);
            $scope.$on('refresh', fresh);

            function fresh () {
                $scope.loadingBody = true;
                $scope.error = false;
                alumnesAPI.get().then(function (response) {
                    $scope.alumnes = response.data;
                    $scope.loadingBody = false;
                    $scope.editing = null;
                }, function () {
                    $scope.loadingBody = false;
                    $scope.error = true;
                });
            }
            fresh();

            function crearAlumne(event, isValid, nouAlumne) {
                if (isValid) {
                    $scope.loadingCreate = true;
                    alumnesAPI.post(nouAlumne).then(function (response) {
                        $scope.alumnes.push(response.data)
                        $scope.loadingCreate = false;
                        ToastCreate();
                    }, function () {
                        $scope.error = true;
                        $scope.loadingCreate = false;
                    });
                }
            }

            function deleteAlumne(event, alumne) {
                $scope.loadingDelete = alumne.Id;
                alumnesAPI.delete(alumne.Id).then(function () {
                    $scope.alumnes.splice($scope.alumnes.indexOf(alumne), 1);
                    ToastDelete();
                }, function () {
                    $scope.error = true;
                });
            }

            function updateAlumne(event, alumne, nouAlumne) {
                alumnesAPI.update(alumne.Id, nouAlumne).then(function (response) {
                    $scope.alumnes.splice($scope.alumnes.indexOf(alumne), 1, response.data);
                    ToastUpdate();
                }, function () {
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
                        .textContent('S\'ha creat l\'alumne!')
                        .position(pinTo)
                        .toastClass('md-error')
                        .hideDelay(3000));
            };

            var ToastDelete = function () {
                var pinTo = getToastPosition();

                $mdToast.show(
                    $mdToast.simple()
                        .textContent('S\'ha esborrat l\'alumne!')
                        .position(pinTo)
                        .toastClass('md-error')
                        .hideDelay(3000));
            };

            var ToastUpdate = function () {
                var pinTo = getToastPosition();

                $mdToast.show(
                    $mdToast.simple()
                        .textContent('S\'ha actualitzat l\'alumne!')
                        .position(pinTo)
                        .toastClass('md-error')
                        .hideDelay(3000));
            };

        }]);
