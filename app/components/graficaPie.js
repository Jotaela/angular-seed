'use strict';

angular.module('components')
    .component('graficaPie', {
        templateUrl: './components/graficaPie.template.html',
        controller: function graficaPieController ($scope, $q, contarAPI) {
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
                palette: "bright",
                dataSource: store,
                title: "Alumnes/Professors",
                margin: {
                    bottom: 20
                },
                legend: {
                    visible: true
                },
                animation: {
                    enabled: true
                },
                "export": {
                    enabled: false
                },
                series: [{
                    argumentField: "Nom",
                    valueField: "Num",
                    label: {
                        visible: true,
                        customizeText: function (arg) {
                            return arg.argumentText + " (" + arg.percentText + ")";
                        }
                    }
                }],
                bindingOptions: {
                    "resolveLabelOverlapping": "shift"
                }
            };
            function isNotEmpty(value) {
                return value !== undefined && value !== null && value !== "";
            }
            $scope.dataSource = new DevExpress.data.DataSource({

            });
            var dataSource;
            $scope.dataSource = [
                {
                    "Nom": "Alumnes",
                    "Num": 0
                },
                {
                    "Nom": "Alumnes",
                    "Num": 5
                }
            ];
            contarAPI.get()
                .then(function (response) {
                    dataSource = response.data;
                }
            );

        }
    });
