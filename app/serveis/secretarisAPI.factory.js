'use strict';

angular.module('serveis')
    .factory('secretarisAPI', function ($http) {
        return {
            get: function () {
                return $http.get('http://localhost:57915/api/Secretaris');
            },
            post: function (content) {
                return $http.post('http://localhost:57915/api/Secretaris', content, {headers: {'Content-Type': 'application/json'}});
            },
            delete: function (id) {
                return $http.delete('http://localhost:57915/api/Secretaris/' + id);
            },
            update: function (id, content) {
                return $http.put('http://localhost:57915/api/Secretaris/' + id, content);
            }
        };
    });
