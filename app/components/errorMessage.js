'use strict';

angular.module('components').
    component('errorMessage', {
        templateUrl: './components/errorMessage.template.html',
        controller: function errorMessageController() {
        },
        bindings: {
            text: '@'
        }
    });
