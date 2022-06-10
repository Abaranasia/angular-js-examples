'use strict';
/** Components are defined on the module, where all parts are described.  
 * A component includes a name, to be refered to in the view, 
 * a template with the content, which usually relies on an html file
 * and the controller that contains all the component code */

angular.module('blogList')
  .component('blogList', { 

    templateUrl: '/templates/blog-list.html',
    controller: function (Post, $scope, $rootScope, $location) { // Functionality of the component
      $scope.message = "Blog-list is running...";
      $scope.blogItems = Post.query();

      // This pattern is more robust because we define the functionality inside the component
      $scope.goToItem = (post) => { // This is a function executed when a link is clicked
        console.log(`Item link clicked!`, post);

        $rootScope.$apply(function () {
          $location.path('/entry/' + post.id)
        })
      };
  }
})

