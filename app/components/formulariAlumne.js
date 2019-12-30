'use strict';

angular.module('alumnes')
    .component('formulariAlumne', {
    templateUrl: '/components/formulariAlumne.template.html',
    controller: function formulariAlumneController($scope) {

        function resetForm () {
            initNouAlumne();
            $scope.nouAlumneForm.$setPristine();
            $scope.nouAlumneForm.Nom.$touched = false;
            $scope.nouAlumneForm.Cognom.$touched = false;
            $scope.nouAlumneForm.Dni.$touched = false;
            $scope.nouAlumneForm.Tel.$touched = false;
        }
        function initNouAlumne() {
            $scope.nouAlumne = {
                Nom: '',
                Cognom: '',
                Dni: '',
                Tel: ''
            };
        }
        initNouAlumne();

        $scope.crearAlumne = function (isValid) {
            var nouAlumne = {
                Nom: "",
                Cognom: "",
                Dni: "",
                Tel: ""
            };
            if (isValid) {
                nouAlumne = {Nom: $scope.nouAlumne.Nom, Cognom: $scope.nouAlumne.Cognom, Dni: $scope.nouAlumne.Dni, Tel: $scope.nouAlumne.Tel};
                $scope.$emit('created', isValid, nouAlumne);
                resetForm();
            }
        };


        },
        bindings: {
            loading: '<'
        }
    });
