'use strict';

angular.module('confirmClick').
  directive('confirmClick', function () {
    return {
      restrict: "A", // Only displays the attributes part of the directive
      link: function (scope, element, attr) {
        let msg = attr.confirmClick || "Are you sure?"
        let clickAction = attr.confirmedClick;

        element.bind("click", function (event) {
          if (window.confirm(msg)) {
            scope.$eval(clickAction)
          }
        });
      }
    }
  })