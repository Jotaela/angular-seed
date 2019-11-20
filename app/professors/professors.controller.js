angular.module('professors')
    .controller('professorsController',
        ['$scope',
        '$mdToast',
        'professorsAPI',
        function professorsController(
            $scope,
            $mdToast,
            professorsAPI
        ) {
            $scope.loadingCreate = false;
            $scope.loadingDelete = null;
            $scope.loadingBody = true;
            $scope.error = false;


            $scope.$on('removed', deleteProfessor);
            $scope.$on('updated', updateProfessor);

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

            var resetForm = () => {
                $scope.nouProfe.Nom = "";
                $scope.nouProfe.Cognom = "";
                $scope.nouProfe.Dni = "";
                $scope.nouProfe.Tel = "";
                $scope.nouProfessorForm.$setPristine();
                $scope.nouProfessorForm.Nom.$untouched = true;
                $scope.nouProfessorForm.Nom.$touched = false;
                $scope.nouProfessorForm.Cognom.$untouched = true;
                $scope.nouProfessorForm.Cognom.$touched = false;
                $scope.nouProfessorForm.Dni.$untouched = true;
                $scope.nouProfessorForm.Dni.$touched = false;
                $scope.nouProfessorForm.Tel.$untouched = true;
                $scope.nouProfessorForm.Tel.$touched = false;
            };

            $scope.crearProfe = (isValid) => {
                if (isValid) {
                    $scope.loadingCreate = true;
                    professorsAPI.post($scope.nouProfe).then((response) => {
                        professorsAPI.get().then((response) => {
                            $scope.professors = response.data;
                        }, (error) => {
                            $scope.error = true;
                        });
                        resetForm();
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
                console.log(id + '' + canviProfessor.Nom);
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