'use strict';

angular.module('professors')
    .controller('professorsController',
        ['$scope',
        '$mdToast',
        'professorsAPI',
        '$http',
        function professorsController(
            $scope,
            $mdToast,
            professorsAPI,
            $http
        ) {
            $scope.loadingCreate = false;
            $scope.loadingDelete = null;
            $scope.loadingBody = true;
            $scope.error = false;
            $scope.editing = null;

            $scope.$on('removed', deleteProfessor);
            $scope.$on('updated', updateProfessor);
            $scope.$on('created', crearProfe);

            var fresh = function () {
                professorsAPI.get().then(function (response) {
                    $scope.professors = response.data;
                    $scope.loadingBody = false;
                    $scope.loadingCreate = false;
                    $scope.editing = null;
                }, function (error) {
                    $scope.loadingBody = false;
                    $scope.error = true;
                });
            };
            fresh();

            function crearProfe(event, isValid, nouProfe) {
                if (isValid) {
                    professorsAPI.post(nouProfe).then(function (response) {
                        fresh();
                        ToastCreate();
                    }, function (error) {
                        $scope.error = true;
                    });
                }
            }

            function deleteProfessor(event, id){
                $scope.loadingDelete = id;
                professorsAPI.delete(id).then(function (response) {
                    fresh();
                    ToastDelete();
                }, function (error) {
                    $scope.error = true;
                });
            }


            function updateProfessor(event, id, canviProfessor) {
                professorsAPI.update(id, canviProfessor).then(function (response) {
                    fresh();
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
                        .toastClass('md-error')
                        .hideDelay(3000));
            };

            var ToastDelete = function () {
                var pinTo = getToastPosition();

                $mdToast.show(
                    $mdToast.simple()
                        .textContent('S\'ha esborrat el professor!')
                        .position(pinTo)
                        .toastClass('md-error')
                        .hideDelay(3000));
            };
        }]);