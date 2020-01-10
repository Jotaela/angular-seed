'use strict';

angular.module('components').
    component('cartaItem', {
        templateUrl: '/components/cartaItem.template.html',
        controller: function cartaItemController($scope, $mdDialog) {

            var deleteItem = function (item) {
                $scope.loadingDelete = item.Id;
                $scope.$emit('removed', item);
            };

            $scope.updateItem = function (item, nouItem) {
                $scope.$emit('updated', item, nouItem);
            };

            $scope.confirmDelete = function (ev, item) {
                var confirm = $mdDialog.confirm()
                    .title('Estas segur que vols esborrar al Professor amb la ID: ' + item.Id + '?')
                    .textContent('El professor que has seleccionat ser� esborrat permanentment.')
                    .ariaLabel('Esborrar professor')
                    .targetEvent(ev)
                    .ok('Sips! UwU')
                    .cancel('Ups, cancela Pls');
                $mdDialog.show(confirm).then(function () {
                    deleteItem(item);
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
