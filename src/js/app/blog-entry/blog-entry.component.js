'use strict';

angular.module('blogEntry')
  .component('blogEntry', {

    templateUrl: '/templates/blog-entry.html',
    controller: function (Post, $http, $location, $routeParams, $scope) { // Functionality of the component
      // Post references to our custom service Post that connects to the $resource
      console.log(`I'm Blog Entry view`);
      // console.log("$routeParams", $routeParams)

      $scope.entryId = '';
      $scope.title = "No entries available";
      // $scope.blogItems = [];

      //V4: reading data from Post service
      Post.query(function (data) {
        angular.forEach(data, (blog) => {
          if (blog.id == parseInt($routeParams.id)) {
            $scope.entryId = blog.id;
            $scope.title = blog.desc
          }
        });
      })
      // V3: reading from a served JSON file:
/*       $http.get("/json/blogPosts.json") // modern promise handler
        .then(({ data }) => {
          $scope.blogItems = data;

        })
        .catch((error) => {
          console.err("Error: ", error)
        }); */

    }
  })