'use strict';

angular.module('firstPage')
  .component('firstPage', {
    templateUrl: '/templates/first-page.html',
    controller: function ($scope) {
      console.log(`I'm First Page controller`);
    }
  })