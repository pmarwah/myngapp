define(['./config.app.js',
        './../common/common.factory.js',
        './../common/common.ctrl.js'
    ],

    function(config, commonFactory, commonController) {
        'use strict';

        var app = angular.module('app', ['ngRoute']);

        app.config(config);
        app.factory('dataFactory', commonFactory);
        app.controller('appController', commonController);
    }
);

require(['./config.app.js'],
    function() {
        'use strict';

        angular.bootstrap(document, ['app']);
    }
);