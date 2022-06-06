'use strict';

angular.module('confirmClick').
  directive('confirmClick', function () {
    return {
      link: function (scope, element, attr) {
        console.log(scope);
        console.log(element); // Element which the directive is binded; here is an a tag
        console.log(attr.confirmClick); // Displays the value of the confirmClick attribute of the binded element
        console.log("ngHref: ", attr.ngHref); // Displays the  value of the ng-href attribute of the binded element
        console.log("id: ", attr.id); // Displays the  value of the id attribute of the binded element
      }
    }
  })