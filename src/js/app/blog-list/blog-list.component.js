'use strict';
/** Components are defined on the module, where all parts are described.  
 * A component includes a name, to be refered to in the view, 
 * a template with the content, which usually relies on an html file
 * and the controller that contains all the component code */

angular.module('blogList')
  .component('blogList', { 
  
  //template: '<div class=""><h2>{{ message }}</h2><button ng-click="buttonHandle()">Click me</button></div>', // Template with the component view
  templateUrl: '/templates/blog-list.html',
    controller: function (Post, $http, $scope) { // Functionality of the component
    console.log(`I'm Blog List controller`);

      $scope.blogItems = [];

      // v2 - Reading data from our custom resource using $resource 
      $scope.blogItems = Post.query();

/*       $http.get("/json/blogPosts.json")
        .then((response) => {
          $scope.blogItems = response.data
        })
        .catch((error) => {
          console.err("Error: ", error)
        }); */
     
    // To have a variable available in the component, 
    // We need to expose it on the $scope    
    $scope.message="Blog-list is running...";

  }
})

