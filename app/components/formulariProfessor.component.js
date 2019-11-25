angular.module('professors').
    component('formulariProfessor', {
        templateUrl: '/components/formulariProfessor.template.html',
        controller: function cosLlistatController($scope) {

            $scope.crearProfe = (isValid) => {
                if (isValid) {
                    $scope.loadingCreate = true;
                    $scope.$emit('created', isValid, $scope.nouProfe);
                    resetForm();
                }
            };

            $scope.updateProfessor = (id, profe) => {
                $scope.$emit('updated', id, profe);
            }

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

        },
        bindings: {
        }
    });