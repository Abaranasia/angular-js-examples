'use strict';

angular.module('confirmClick').
  directive('confirmClick', function () {
    return {
      scope: {
        message: "@message",
      },
      restrict: "E", // Only displays the element part of the directive
      template: "<a href=''>visit</a>",
      link: function (scope, element, attr) {
        console.log(scope.message); // It contains an attribute of the directive
        console.log(element); // Element which the directive is binded; here is an a tag
        console.log("id: ", attr.id); // Displays the  value of the id attribute of the binded element
      //  console.log(attr.confirmClick); // Displays the value of the confirmClick attribute of the binded element
      //  console.log("ngHref: ", attr.ngHref); // Displays the  value of the ng-href attribute of the binded element
      }
    }
  })