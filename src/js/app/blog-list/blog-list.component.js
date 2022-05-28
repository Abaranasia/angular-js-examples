'use strict';
/** Components are defined on the module, where all parts are described.  
 * A component includes a name, to be refered to in the view, 
 * a template with the content, which usually relies on an html file
 * and the controller that contains all the component code */

angular.module('blogList')
  .component('blogList', { 
  
  //template: '<div class=""><h2>{{ message }}</h2><button ng-click="buttonHandle()">Click me</button></div>', // Template with the component view
  templateUrl: '/templates/blog-list.html',
  controller: function($scope) { // Functionality of the component
    console.log(`I'm Blog List controller`);

    let blogItems = [
      { title: 'Entry title #1', id: 1, desc: 'First page' },
      { title: 'Entry title #2', id: 2, desc: 'Second entry' },
      { title: 'Entry title #3', id: 3, desc: 'Third entry' },
      { title: 'Entry title #4', id: 4, desc: 'About' },
    ];
    console.log(blogItems);
    $scope.items= blogItems; 
    // To have a variable available in the component, 
    // We need to expose it on the $scope
    
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