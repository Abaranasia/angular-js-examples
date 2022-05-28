'use strict';

angular.module('blogEntry')
  .component('blogEntry', {

    templateUrl: '/templates/blog-entry.html',
    controller: function ($routeParams, $scope) { // Functionality of the component
      console.log(`I'm Blog Entry view`);
      console.log($routeParams)
      $scope.entryId = '';
      $scope.title = "No entries available";

      if ($routeParams) {
        $scope.entryId = $routeParams.id;
        $scope.title = $routeParams.t;
      }
    }
  })