'use strict';

angular.module('serveis')
    .factory('alumnesAPI', function ($http) {
        return {
            get: function () {
                return $http.get('http://localhost:57915/api/Alumnes1');
            },
            post: function (content) {
                return $http.post('http://localhost:57915/api/Alumnes1', content, {headers: {'Content-Type': 'application/json'}});
            },
            delete: function (id) {
                return $http.delete('http://localhost:57915/api/Alumnes1/' + id);
            },
            update: function (id, content) {
                return $http.put('http://localhost:57915/api/Alumnes1/' + id, content);
            }
        };
    });
