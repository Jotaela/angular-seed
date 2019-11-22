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


            $scope.$on('removed', deleteProfessor);
            $scope.$on('updated', updateProfessor);
            $scope.$on('created', crearProfe);

            var fresh = () => {
                professorsAPI.get().then((response) => {
                    $scope.professors = response.data;
                    $scope.loadingBody = false;
                }, (error) => {
                    $scope.loadingBody = false;
                    $scope.error = true;
                });
            };
            fresh();
            
            function crearProfe(event, isValid, nouProfe) {
                if (isValid) {
                    $http.post('http://localhost:57915/api/Professors', nouProfe, { headers: { 'Content-Type': 'application/json' } }).then((response) => {
                        professorsAPI.get().then((response) => {
                            $scope.professors = response.data;
                        }, (error) => {
                            $scope.error = true;
                        });
                        $scope.loadingCreate = false;
                        ToastCreate();
                    }, (error) => {
                        $scope.error = true;
                    });
                }
            };

            function deleteProfessor(event, id){
                $scope.loadingDelete = id;
                professorsAPI.delete(id).then((response) => {
                    professorsAPI.get().then((response) => {
                        $scope.professors = response.data;
                        ToastDelete();
                    }, (error) => {
                        $scope.error = true;
                    });
                }, (error) => {
                    $scope.error = true;
                });
            };

            $scope.editing = null;
            
            function updateProfessor(event, id, canviProfessor) {
                professorsAPI.update(id, canviProfessor).then((response) => {
                    professorsAPI.get().then((response) => {
                        $scope.professors = response.data;
                        $scope.editing = null;
                    }, (error) => {
                        $scope.error = true;
                    });
                }, (error) => {
                    $scope.error = true;
                })
            }

            // TOAST

            var last = {
                bottom: false,
                top: true,
                left: false,
                right: true
            };

            var toastPosition = angular.extend({}, last);

            var getToastPosition = () => {
                sanitizePosition();

                return Object.keys(toastPosition)
                    .filter(function (pos) {
                        return toastPosition[pos];
                    }).join(' ');
            };

            var sanitizePosition = () => {
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
            }

            var ToastCreate = () => {
                var pinTo = getToastPosition();

                $mdToast.show(
                    $mdToast.simple()
                        .textContent('S\'ha creat el professor!')
                        .position(pinTo)
                        .toastClass('md-error')
                        .hideDelay(3000));
            };

            var ToastDelete = () => {
                var pinTo = getToastPosition();

                $mdToast.show(
                    $mdToast.simple()
                        .textContent('S\'ha esborrat el professor!')
                        .position(pinTo)
                        .toastClass('md-error')
                        .hideDelay(3000));
            };
        }]);