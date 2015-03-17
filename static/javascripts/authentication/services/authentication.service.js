(function () {
  'use strict';

  angular
    .module('thinkster.authentication.services')
    .factory('Authentication', Authentication);

  Authentication.$inject = ['$cookies', '$http'];

  function Authentication($cookies, $http) {

    var Authentication = {
      register: register
    };

    return Authentication;

    function register(email, password, confirm_password, username) {
      return $http.post('/api/v1/accounts/', {
        username: username,
        password: password,
        confirm_password: confirm_password,
        email: email
      });


    }
  }

})();
