'use strict';

angular.module('professors')
    .component('formulariProfessor', {
        templateUrl: '/components/formulariProfessor.template.html',
        controller: function formulariProfessorController($scope) {
            $scope.crearProfe = function (isValid) {
                if (isValid) {
                    var nouProfe = {Nom: $scope.nouProfe.Nom, Cognom: $scope.nouProfe.Cognom, Dni: $scope.nouProfe.Dni, Tel: $scope.nouProfe.Tel};
                    $scope.$emit('created', isValid, nouProfe);
                    resetForm();
                }
            };

            function resetForm () {
                initNouProfessor();
                $scope.nouProfessorForm.$setPristine();
                $scope.nouProfessorForm.Nom.$touched = false;
                $scope.nouProfessorForm.Cognom.$touched = false;
                $scope.nouProfessorForm.Dni.$touched = false;
                $scope.nouProfessorForm.Tel.$touched = false;
            }
            function initNouProfessor() {
                $scope.nouProfe = {
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
