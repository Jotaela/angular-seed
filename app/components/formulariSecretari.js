'use strict';

angular.module('secretaris')
    .component('formulariSecretari', {
    templateUrl: '/components/formulariSecretari.template.html',
    controller: function formulariSecretariController($scope) {
        $scope.crearSecretari = function (isValid) {
            var nouSecretari = {
                Nom: "",
                Cognom: "",
                Dni: "",
                Tel: ""
            };
            if (isValid) {
                nouSecretari = {Nom: $scope.nouSecretari.Nom, Cognom: $scope.nouSecretari.Cognom, Dni: $scope.nouSecretari.Dni, Tel: $scope.nouSecretari.Tel};
                $scope.$emit('created', isValid, nouSecretari);
                resetForm();
            }
        };

            var resetForm = function () {
                $scope.nouSecretari.Nom = "";
                $scope.nouSecretari.Cognom = "";
                $scope.nouSecretari.Dni = "";
                $scope.nouSecretari.Tel = "";
                $scope.nouSecretariForm.$setPristine();
                $scope.nouSecretariForm.Nom.$untouched = true;
                $scope.nouSecretariForm.Nom.$touched = false;
                $scope.nouSecretariForm.Cognom.$untouched = true;
                $scope.nouSecretariForm.Cognom.$touched = false;
                $scope.nouSecretariForm.Dni.$untouched = true;
                $scope.nouSecretariForm.Dni.$touched = false;
                $scope.nouSecretariForm.Tel.$untouched = true;
                $scope.nouSecretariForm.Tel.$touched = false;
            };

        },
        bindings: {
            loading: '<'
        }
    });
