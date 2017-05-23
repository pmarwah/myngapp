require.config({
    //baseUrl: ../,  //data-main
    paths: {
        ui_router: 'libs/angular-ui-router',
        ng_resource: 'libs/angular-resource.min',
    },
    shim: {
       'ui_router': {
            deps: []
        } 
    },
  config: { 
        text: { //to be used for including html files using require
                    useXhr: function (url, protocol, hostname, port) { 
                    return true;    
                } 
        } 
   }
});


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
