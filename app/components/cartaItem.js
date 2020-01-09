'use strict';

angular.module('components').
    component('cartaItem', {
        templateUrl: '/components/cartaItem.template.html',
        controller: function cartaItemController($scope, $mdDialog) {

            var deleteItem = function (alumne) {
                $scope.loadingDelete = alumne.Id;
                $scope.$emit('removed', alumne);
            };

            $scope.updateItem = function (item, nouItem) {
                $scope.$emit('updated', item, nouItem);
            };

            $scope.confirmDelete = function (ev, alumne) {
                var confirm = $mdDialog.confirm()
                    .title('Estas segur que vols esborrar al Professor amb la ID: ' + alumne.Id + '?')
                    .textContent('El professor que has seleccionat ser� esborrat permanentment.')
                    .ariaLabel('Esborrar professor')
                    .targetEvent(ev)
                    .ok('Sips! UwU')
                    .cancel('Ups, cancela Pls');
                $mdDialog.show(confirm).then(function () {
                    deleteItem(alumne);
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
                $scope.canviItem = {
                    Nom: item.Nom,
                    Cognom: item.Cognom,
                    Dni: item.Dni,
                    Tel: item.Tel
                };
            };

        },
        bindings: {
            item: '<'
        }
    });
