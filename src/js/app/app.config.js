'use strict';
angular.module('try')
  .config(
    function ( // We include here all providers neeed for the app
      $locationProvider, // Sets url location; requires <base> in index.html
      $routeProvider // Defines the routes of the app
    ) { // Next comes the code needed to use the providers
      $locationProvider.html5Mode({ enabled: true }),
        $routeProvider 
          .when("/", {
            template: "<site-nav></site-nav>"
          })
          .when("/blog/1", {
            template: "<first-page></first-page>"
          })
          .when("/blog/2", {
            template: "<counter></counter>"
          })
        .when("/blog/3", {
          templateUrl: "<blog-list></blog-list>"
        })
        .when("/blog/4", {
          templateUrl: "/templates/about.html" // no component page
        })
          .otherwise({
            template: "<h3>Page not found :(</h3>"
          })

    });