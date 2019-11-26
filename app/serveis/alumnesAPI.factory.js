'use strict';

angular.module('serveis')
    .factory('alumnesAPI', function ($http) {
        return {
            get: function () {
                return $http.get('http://localhost:57915/api/Alumnes');
            },
            post: function (content) {
                return $http.post('http://localhost:57915/api/Alumnes', content, {headers: {'Content-Type': 'application/json'}});
            },
            delete: function (id) {
                return $http.delete('http://localhost:57915/api/Alumnes/' + id);
            },
            update: function (id, content) {
                return $http.put('http://localhost:57915/api/Alumnes/' + id, content);
            }
        };
    });
