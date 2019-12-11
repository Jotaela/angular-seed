'use strict';

angular.module('grafica')
    .component('graficaGreed', {
        templateUrl: './components/graficaGreed.template.html',
        controller: function graficaGreedController ($scope, $q, alumnesAPI){
            var store = new DevExpress.data.CustomStore({
                load: function(loadOptions) {
                    return alumnesAPI.get()
                        .then(function (response) {
                            return {
                                data: response.data,
                                totalCount: response.totalCount,
                                summary: response.summary,
                                groupCount: response.groupCount
                            };
                        }, function (response) {
                            return $q.reject("Data Loading Error");
                        });
                }
            });

            $scope.dataGridOptions = {
                dataSource: store,
                showBorders: true,
                remoteOperations: true,
                paging: {
                    pageSize: 12
                },
                pager: {
                    showPageSizeSelector: true,
                    allowedPageSizes: [8, 12, 20]
                },
                columns: [{
                    dataField: "Nom",
                    dataType: "string"
                }, {
                    dataField: "Cognom",
                    dataType: "string"
                }, {
                    dataField: "Dni",
                    dataType: "string"
                }, {
                    dataField: "Tel",
                    dataType: "string"
                }]
            };
        }
    });
