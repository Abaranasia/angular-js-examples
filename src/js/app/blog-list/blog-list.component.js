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
      { title: 'Entry #1', id: 1, desc: 'Benefits of tea' },
      { title: 'Entry #2', id: 2, desc: 'Tasty veggie meals' },
      { title: 'Entry #3', id: 3, desc: 'React vs Angular vs Vuejs' },
      { title: 'Entry #4', id: 4, desc: 'Learn Node AND Python' },
    ];
    console.log(blogItems);
    $scope.items= blogItems; 
    // To have a variable available in the component, 
    // We need to expose it on the $scope
    
    $scope.message="Blog-list is running...";

  }
})

