'use strict';

angular.module('serveis')
    .factory('professorsAPI', function ($http) {
        return {
            get: function () {
                return $http.get('http://localhost:57915/api/Professors');
            },
            post: function (content) {
                return $http.post('http://localhost:57915/api/Professors', content, {headers: {'Content-Type': 'application/json'}});
            },
            delete: function (id) {
                return $http.delete('http://localhost:57915/api/Professors/' + id);
            },
            update: function (id, content) {
                return $http.put('http://localhost:57915/api/Professors/' + id, content);
            }
        };
    });
