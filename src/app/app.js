(function () {
    "use strict";

    angular
        .module(
            "SsuniApp",
            ["ui.router", "ngAria", "ngMaterial", "ngTouch"]
        )
        .config( routeConfiguration );

    routeConfiguration.$inject = [ '$stateProvider', '$urlRouterProvider' ];
    function routeConfiguration($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/institucional');

        $stateProvider
            .state( "institucional", {
                url: "/institucional",
                controller: "institucionalController as vm",
                views: {
                    '': { templateUrl: "app/institucional/institucional.html" },
                    "busqueda@institucional": { templateUrl: 'app/busqueda/busqueda.html', controller: "busquedaController as vm" }
                }
            })
            .state("login", {
                url: "/login",
                templateUrl: "app/login/login.html",
                controller: "loginController as vm"
            });
    }
})();