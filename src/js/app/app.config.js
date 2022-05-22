'use strict';
angular.module('try')
  .config(
    function ( // We include here all providers neeed for the app
      $locationProvider,
      $routeProvider
    ) {
      $locationProvider.html5Mode({ enabled: true }),
        $routeProvider
          .when("/", {
            template: "<blog-list></blog-list>"
          })
          .when("/blog/1", {
            template: "<first-page></first-page>"
          })
          .when("/blog/2", {
            template: "<blog-list></blog-list>"
          })
          .otherwise({
            template: "<h3>Page not found :(</h3>"
          })

    });