'use strict';

angular.module('blogList')
.component('blogList', { // A component includes a name, to be refered to in the view, a template with the content and the controller with the component code
  
  template: '<div class=""><h2>{{ message }}</h2><button ng-click="buttonHandle()">Click me</button></div>', // Template with the component view
  
  controller: function($scope) { // Functionality of the component
    console.log(`I'm a controller`);
    $scope.message="Blog-list is running...";
    $scope.clicks=0;
    $scope.buttonHandle = function() {
      console.log("clicked!");
      $scope.clicks+=1;
      $scope.message="You clicked "+ $scope.clicks + " times";
    };
  }
})

// Comented for reference

  // .controller  ('BlogListController', function($scope) {
  //   console.log(`I'm a controller`);
  //   $scope.message="Blog-list is running...";
  //   $scope.clicks=0;
  //   $scope.buttonHandle = function() {
  //     console.log("clicked!");
  //     $scope.clicks+=1;
  //     $scope.message="You clicked "+ $scope.clicks + " times";
  //   }
  // })