'use strict';
/** Components are defined on the module, where all parts are described.  
 * A component includes a name, to be refered to in the view, 
 * a template with the content, which usually relies on an html file
 * and the controller that contains all the component code */

angular.module('siteNav')
  .component('siteNav', {

    templateUrl: '/templates/site-nav.html', // Reference to the component html file 
    controller: function ($scope) { // Main functionality of the component
      console.log(`I'm the App main index`);

      let appPages = [
        { title: 'first', id: 1, desc: 'Using directives' },
        { title: 'counter', id: 2, desc: 'Simple counter' },
        { title: 'blog', id: 3, desc: 'Blog List' },
        { title: 'about', id: 4, desc: 'About page' },
      ];
      console.log(appPages);
      $scope.items = appPages;
      // To have a variable available in the component, 
      // We need to expose it on the $scope

      $scope.message = "Welcome to an angular SPA";
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