require.config({
    //baseUrl: ../,  //data-main
    paths: {
        ui_router: 'libs/angular-ui-router',
        ng_resource: 'libs/angular-resource.min',
        app: 'init.app'
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

require(['ui_router', 'app'
], function (ui_router, App) {
    App.initialize();
});
