(function () {
  'use strict';

  angular
    .module('thinkster.authentication.controllers')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$location', '$scope', 'Authentication'];

  function RegisterController($location, $scope, Authentication) {
    var vm = this;

    activate();

    function activate() {
      if (Authentication.isAuthenticated()) {
        $location.url('/');
      }
    }

    vm.register = register;

    function register() {
      Authentication.register(vm.email, vm.password, vm.confirm_password, vm.username);
    }
  }

})();
