'use strict';

angular.module('secretaris')
    .component('formulariSecretari', {
    templateUrl: '/components/formulariSecretari.template.html',
    controller: function formulariSecretariController($scope) {
        $scope.crearSecretari = function (isValid) {
            if (isValid) {
                var nouSecretari = {Nom: $scope.nouSecretari.Nom, Cognom: $scope.nouSecretari.Cognom, Dni: $scope.nouSecretari.Dni, Tel: $scope.nouSecretari.Tel};
                $scope.$emit('created', isValid, nouSecretari);
                resetForm();
            }
        };

        var resetForm = function () {
            initNouSecretari();
            $scope.nouSecretariForm.$setPristine();
            $scope.nouSecretariForm.Nom.$touched = false;
            $scope.nouSecretariForm.Cognom.$touched = false;
            $scope.nouSecretariForm.Dni.$touched = false;
            $scope.nouSecretariForm.Tel.$touched = false;
        };

        function initNouSecretari () {
            $scope.nouSecretari= {
                Nom: '',
                Cognom: '',
                Dni: '',
                Tel: ''
            };
        }

        },
        bindings: {
            loading: '<'
        }
    });
