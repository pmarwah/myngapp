define([], function() {
    'use strict';

    function config($routeProvider) {
        $routeProvider.when('/home', { templateUrl: 'index.html', controller: '' }).otherwise({ redirectTo: '/home' });
    }
    config.$inject = ['$routeProvider'];

    return config;


});