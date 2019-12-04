'use strict';

angular.module('serveis')
    .factory('contarAPI', function ($http) {
        return {
            get: function () {
                return $http.get('http://localhost:57915/api/contar',{headers: {'Content-Type': 'application/json'}});
            }
        };
    });
