define(['./config.app.js',
        './../common/common.factory.js',
        './../common/common.ctrl.js',
        './../components/header/header.directive.js',
        './../components/typeAhead/typeAhead.directive.js'
    ],

    function(config, commonFactory, commonController, header, typeAhead) {
        'use strict';

        var app = angular.module('app', ['ngRoute']);

        app.config(config);
        app.factory('dataFactory', commonFactory);
        app.controller('appController', commonController);
        app.directive('typeAhead', typeAhead);
    }
);