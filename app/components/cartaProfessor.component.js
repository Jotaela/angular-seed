angular.module('professors').
    component('cartaProfessor', {
        templateUrl: '/components/cartaProfessor.template.html',
        controller: function cosLlistatController($scope, $mdDialog) {

            var deleteProfessor = (id) => {
                $scope.loadingDelete = id;
                $scope.$emit('removed', id);
            };

            $scope.updateProfessor = (id, profe) => {
                $scope.$emit('updated', id, profe);
            }

            $scope.confirmDelete = (ev, id) => {
                var confirm = $mdDialog.confirm()
                    .title('Estas segur que vols esborrar al Professor amb la ID: ' + id + '?')
                    .textContent('El professor que has seleccionat serà esborrat permanentment.')
                    .ariaLabel('Esborrar professor')
                    .targetEvent(ev)
                    .ok('Sips! UwU')
                    .cancel('Ups, cancela Pls');
                $mdDialog.show(confirm).then(function () {
                    deleteProfessor(id);
                });
            }

            $scope.canviProfessor = {
                Id: null,
                Nom: "",
                Cognom: "",
                Dni: "",
                tel: ""
            }

            $scope.initUpdateProfessor = (profe, param) => {
                $scope.editing = profe.Id + param;
                $scope.canviProfessor.Id = profe.Id;
                $scope.canviProfessor.Nom = profe.Nom;
                $scope.canviProfessor.Cognom = profe.Cognom;
                $scope.canviProfessor.Dni = profe.Dni;
                $scope.canviProfessor.tel = profe.tel;
            }

        },
        bindings: {
            professor: '<'
        }
    });