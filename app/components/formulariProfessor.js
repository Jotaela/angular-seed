'use strict';

angular.module('professors')
    .component('formulariProfessor', {
        templateUrl: '/components/formulariProfessor.template.html',
        controller: function formulariProfessorController($scope) {
            $scope.crearProfe = function (isValid) {
                var nouProfessor = {
                    Nom: "",
                    Cognom: "",
                    Dni: "",
                    Tel: ""
                };
                if (isValid) {
                    var nouProfe = {Nom: $scope.nouProfe.Nom, Cognom: $scope.nouProfe.Cognom, Dni: $scope.nouProfe.Dni, Tel: $scope.nouProfe.Tel};
                    $scope.$emit('created', isValid, nouProfe);
                    resetForm();
                }
            };

            var resetForm = function () {
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

        },
        bindings: {
            loading: '<'
        }
    });
