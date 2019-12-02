'use strict'

angular.module('grafica')
    .controller('graficaController', function graficaController($scope) {
        $scope.menuInstance = {};
        $scope.chartOptions = {
            dataSource: [
                { fruit: 'Oranges', total: 10 },
                { fruit: 'Apples', total: 15 },
                { fruit: 'Bananas', total: 9 },
                { fruit: 'pencils', total: 2 },
                { fruit: 'glue', total: 20 },
                { fruit: 'computers', total: 11 },
                { fruit: 'emeralds', total: 3 },
                { fruit: 'flutes', total: 5 }
            ],
            series: { argumentField: 'fruit', valueField: 'total' },
            onInitialized: function (e) {
                $scope.menuInstance = e.component;
            }
        };
        $scope.checkBoxValue=true;
    });
