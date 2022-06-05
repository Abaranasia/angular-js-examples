'use strict';

angular.module('blogEntry')
  .component('blogEntry', {

    templateUrl: '/templates/blog-entry.html',
    controller: function ($routeParams, $scope) { // Functionality of the component
      console.log(`I'm Blog Entry view`);
      console.log("$routeParams", $routeParams)
      $scope.entryId = '';
      $scope.title = "No entries available";

      // Safer version, asuming we have access to this info from the detail (like from a DB for example)
      let blogItems = [
        { title: 'Entry-1', id: 1, desc: 'Benefits of tea' },
        { title: 'Entry-2', id: 2, desc: 'Tasty veggie meals' },
        { title: 'Entry-3', id: 3, desc: 'React vs Angular vs Vuejs' },
        { title: 'Entry-4', id: 4, desc: 'Learn Node AND Python' },
      ];

      angular.forEach(blogItems, (blog) => {
        if (blog.id == $routeParams.id) { // ==, not === unless we use parseInt on the routeParam
          $scope.entryId = blog.id;
          $scope.title = blog.desc
        }

      });
/*       if ($routeParams) {
        $scope.entryId = $routeParams.id;
        $scope.title = $routeParams.t;
      } */
    }
  })