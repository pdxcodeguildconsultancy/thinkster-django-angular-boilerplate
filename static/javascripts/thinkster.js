(function () {
  'use strict';

  angular
    .module('thinkster', [
      'thinkster.config',
      'thinkster.routes',
      'thinkster.authentication'
    ]);

  angular
    .module('thinkster.routes', ['ngRoute']);

  .module('thinkster')
  .run(run);

  run.$inject = ['$http'];

  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }

})();
