'use strict';

angular.module('components').
    component('cartaItem', {
        templateUrl: '/components/cartaItem.template.html',
        controller: function cartaItemController($scope, $mdDialog) {

            var deleteItem = function (id) {
                $scope.loadingDelete = id;
                $scope.$emit('removed', id);
            };

            $scope.updateItem = function (id, item) {
                $scope.$emit('updated', id, item);
            };

            $scope.confirmDelete = function (ev, id) {
                var confirm = $mdDialog.confirm()
                    .title('Estas segur que vols esborrar al Professor amb la ID: ' + id + '?')
                    .textContent('El professor que has seleccionat ser� esborrat permanentment.')
                    .ariaLabel('Esborrar professor')
                    .targetEvent(ev)
                    .ok('Sips! UwU')
                    .cancel('Ups, cancela Pls');
                $mdDialog.show(confirm).then(function () {
                    deleteItem(id);
                });
            };

            $scope.canviItem = {
                Id: null,
                Nom: "",
                Cognom: "",
                Dni: "",
                Tel: ""
            };

            $scope.initUpdateItem = function (item, param) {
                $scope.editing = item.Id + param;
                $scope.canviItem.Id = item.Id;
                $scope.canviItem.Nom = item.Nom;
                $scope.canviItem.Cognom = item.Cognom;
                $scope.canviItem.Dni = item.Dni;
                $scope.canviItem.Tel = item.Tel;
            };

        },
        bindings: {
            item: '<'
        }
    });
