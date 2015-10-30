(function () {
    "use strict";

    angular
        .module("SsuniApp")
        .controller("ingresoDocumentoController", ingresoDocumentoController);

    ingresoDocumentoController.$inject = [];
    function ingresoDocumentoController() {
        var vm = this;

        vm.name = "Mario";

    } // end controller IngresoDocumentoController
})();