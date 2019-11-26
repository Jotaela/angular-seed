'use strict';

angular.module('alumnes').
component('formulariAlumne', {
    templateUrl: '/components/formulariAlumne.template.html',
    controller: function cosLlistatController($scope) {
        $scope.crearAlumne = function (isValid) {
            var nouAlumne = {
                Nom: "",
                Cognom: "",
                Dni: "",
                Tel: ""
            };
            if (isValid) {
                $scope.loadingCreate = true;
                var nouAlumne = {Nom: $scope.nouAlumne.Nom, Cognom: $scope.nouAlumne.Cognom, Dni: $scope.nouAlumne.Dni, Tel: $scope.nouAlumne.Tel};
                $scope.$emit('created', isValid, nouAlumne);
                resetForm();
            }
        };

        $scope.updateAlumne = function (id, alumne) {
            $scope.$emit('updated', id, alumne);
        };

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

    },
    bindings: {
        loading: '='
    }
});
