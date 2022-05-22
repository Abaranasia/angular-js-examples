'use strict';
angular.module('try')
  .config(
    function ( // We include here all providers neeed for the app
      $locationProvider,
      $routeProvider
    ) {
      $locationProvider.html5Mode({ enabled: true }), // Sets url location; requires <base> in index.html
        $routeProvider // Defines the route of the app
          .when("/", {
            template: "<blog-list></blog-list>"
          })
          .when("/blog/1", {
            template: "<first-page></first-page>"
          })
          .when("/blog/2", {
            template: "<blog-list></blog-list>"
          })
        .when("/blog/4", {
          templateUrl: "/templates/about.html" // no component page
        })
          .otherwise({
            template: "<h3>Page not found :(</h3>"
          })

    });