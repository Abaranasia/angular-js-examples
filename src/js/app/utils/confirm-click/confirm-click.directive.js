'use strict';

angular.module('confirmClick').
  directive('confirmClick', function () {
    return {
      restrict: "A", // Only displays the attributes part of the directive
      link: function (scope, element, attr) {
        let msg = attr.confirmClick || "Are you sure?"
        let clickAction = attr.confirmedClick;
        // This is a lot stronger confirm-click

        element.bind("click", function (event) {
          // these two functions will prevent the execution of other functions derived from the event
          event.stopImmediatePropagation();
          event.preventDefault();

          if (window.confirm(msg)) {
            scope.$eval(clickAction)
          } else {
            console.log('Event cancelled')
          };
        });
      }
    }
  })