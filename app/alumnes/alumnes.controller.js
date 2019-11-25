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
            $scope.opcions = ['Nom', 'Cognom', 'Dni', 'Tel'];
            $scope.opcio = 'Nom';

            var resetForm = function () {
                $scope.nouAlumne.Nom = "";
                $scope.nouAlumne.Cognom = "";
                $scope.nouAlumne.Dni = "";
                $scope.nouAlumne.Tel = "";
                $scope.nouAlumneForm.$setPristine();
                $scope.nouAlumneForm.Nom.$untouched = true;
                $scope.nouAlumneForm.Nom.$touched = false;
                $scope.nouAlumneForm.Cognom.$untouched = true;
                $scope.nouAlumneForm.Cognom.$touched = false;
                $scope.nouAlumneForm.Dni.$untouched = true;
                $scope.nouAlumneForm.Dni.$touched = false;
                $scope.nouAlumneForm.Tel.$untouched = true;
                $scope.nouAlumneForm.Tel.$touched = false;
            };

            alumnesAPI.get().then(function (response) {
                $scope.alumnes = response.data;
                $scope.loadingBody = false;
            }, function (error) {
                $scope.loadingBody = false;
                $scope.error = true;
            });

            $scope.crearAlumne = function (isValid) {
                if (isValid) {
                    $scope.loadingCreate = true;
                    alumnesAPI.post($scope.nouAlumne).then(function (response) {
                        alumnesAPI.get().then(function (response) {
                            $scope.alumnes = response.data;
                        }, function (error) {
                            $scope.error = true;
                        });
                        resetForm();
                        $scope.loadingCreate = false;
                        Toast('s\'ha creat correctament!!');
                    }, function (error) {
                        $scope.error = true;
                    });
                }
            };

            var deleteAlumne = function (id) {
                $scope.loadingDelete = id;
                alumnesAPI.delete(id).then(function (response) {
                    alumnesAPI.get().then(function (response) {
                        $scope.alumnes = response.data;
                        Toast('s\'ha esborrat correctament!!');
                        $scope.error = false;
                    }, function (error) {
                        $scope.error = true;
                    });
                }, function (error) {
                    $scope.error = true;
                });
            };

            $scope.confirmDelete = function (ev, id) {
                var confirm = $mdDialog.confirm()
                    .title('Estas segur que vols esborrar al Alumne amb la ID: ' + id + '?')
                    .textContent('l\'alumne que has seleccionat serà esborrat permanentment.')
                    .ariaLabel('Esborrar professor')
                    .targetEvent(ev)
                    .ok('Sips! UwU')
                    .cancel('Ups, cancela Pls');
                $mdDialog.show(confirm).then(function () {
                    deleteAlumne(id);
                });
            };

            $scope.editing = null;
            $scope.canviAlumne = {
                Id: null,
                Nom: "",
                Cognom: "",
                Dni: "",
                Tel: ""
            };

            $scope.updateAlumne = function (id) {
                alumnesAPI.update(id, $scope.canviAlumne).then(function (response) {
                    alumnesAPI.get().then(function (response) {
                        $scope.alumnes = response.data;
                        $scope.editing = null;
                        Toast('s\'ha modificat correctament!!');
                    }, function (error) {
                        $scope.error = true;
                    });
                }, function (error) {
                    $scope.error = true;
                });
            };

            $scope.initUpdateAlumne = function (alumne, param) {
                $scope.editing = alumne.Id + param;
                $scope.canviAlumne.Id = alumne.Id;
                $scope.canviAlumne.Nom = alumne.Nom;
                $scope.canviAlumne.Cognom = alumne.Cognom;
                $scope.canviAlumne.Dni = alumne.Dni;
                $scope.canviAlumne.Tel = alumne.Tel;
            };

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

            var Toast = function (missatge, classe) {
                var pinTo = getToastPosition();

                $mdToast.show(
                    $mdToast.simple()
                        .textContent(missatge)
                        .position(pinTo)
                        .hideDelay(3000));
            };

        }]);
