'use strict';

angular.module('counter')
  .component('counter', {

    templateUrl: '/templates/counter.html',
    controller: function ($scope) { // Functionality of the component
      console.log(`I'm a simple and stupid counter`);

      const initValue = "You counter = 0"
      $scope.message = initValue;
      $scope.clicks = 0;
      $scope.addHandle = function () {
        console.log("added 1!");
        $scope.clicks += 1;
        $scope.message = "You clicked " + $scope.clicks + " times";
      };
      $scope.subHandle = function () {
        console.log("substracted 1!");
        $scope.clicks -= 1;
        $scope.message = "You clicked " + $scope.clicks + " times";
      };
      $scope.resetHandle = function () {
        console.log("clicked!");
        $scope.clicks = 0;
        $scope.message = initValue;
      };
    }
  })