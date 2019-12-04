'use strict';

angular.module('components')
    .component('graficaChart', {
    templateUrl: './components/graficaChart.template.html',
    controller: function graficaChartController($scope, contarAPI) {
        $scope.checkBoxValue=true;
        $scope.menuInstance = {};
        var store = new DevExpress.data.CustomStore({
            load: function(loadOptions) {
                return contarAPI.get()
                    .then(function (response) {
                        return {
                            data: response.data
                        };
                    }, function (response) {
                        return $q.reject("Data Loading Error");
                    });
            }
        });
        $scope.chartOptions = {
            dataSource: store,
            rotated: true,
            commonSeriesSettings: {
                argumentField: "breed",
                type: "bar"
            },
            title: {
              text: "Número d'alumnes i professors"
            },
            series: { argumentField: 'Nom', valueField: 'Num' },
            onInitialized: function (e) {
                $scope.menuInstance = e.component;
            }

        };
    }});
