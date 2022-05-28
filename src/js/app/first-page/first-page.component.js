'use strict';

angular.module('firstPage')
  .component('firstPage', {
    templateUrl: '/templates/first-page.html',
    controller: function ($scope) {
      console.log(`I'm First Page controller`);
      // No more code here because the main functionality of this component
      // is based on the directives, which act directly in the template
    }
  })