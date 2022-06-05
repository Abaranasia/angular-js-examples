'use strict';

angular.module('blogEntry')
  .component('blogEntry', {

    templateUrl: '/templates/blog-entry.html',
    controller: function ($http, $location, $routeParams, $scope) { // Functionality of the component
      console.log(`I'm Blog Entry view`);
      console.log("$routeParams", $routeParams)
      $scope.entryId = '';
      $scope.title = "No entries available";
      $scope.blogItems = [];

      // V3: reading from a served JSON file:
      $http.get("/json/blogPosts.json") // modern promise handler
        .then(({ data }) => {
          $scope.blogItems = data;

          angular.forEach($scope.blogItems, (blog) => {
            if (blog.id == parseInt($routeParams.id)) {
              $scope.entryId = blog.id;
              $scope.title = blog.desc
            }
          });
        })
        .catch((error) => {
          console.err("Error: ", error)
        });

    }
  })