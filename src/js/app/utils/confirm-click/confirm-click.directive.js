'use strict';

angular.module('confirmClick').
  directive('confirmClick', function () {
    return {
      scope: {
        message: "@message",
        eq: "=eq",
        post: "=post",
      },
      restrict: "E", // Only displays the element part of the directive
      template: "<a href=''>( {{ post.id }} )</a>", // It shows the title of the post, so no need to write text 
      link: function (scope, element, attr) {
        console.log(scope.message); // It contains an attribute of the directive
        console.log(element); // Element which the directive is binded; here is an a tag
        console.log("id: ", attr.id); // Displays the  value of the id attribute of the binded element
        console.log("eq: ", scope.eq); // Displays the value of the id attribute + 1000
      //  console.log(attr.confirmClick); // Displays the value of the confirmClick attribute of the binded element
      //  console.log("ngHref: ", attr.ngHref); // Displays the  value of the ng-href attribute of the binded element
      }
    }
  })