'use strict';

/**
 * @ngdoc directive
 * @name angularCheckboxApp.directive:checkboxItem
 * @description
 * # checkboxItem
 */
angular.module('angularCheckboxApp')
  .directive('checkboxItem', [
    '$log',
    function($log) {
      return {
        restrict: 'EA',
        require: '^checkboxList',
        scope: {
          item: '='
        },
        template: '<input type="checkbox" ng-model="item.checked">',
        link: function(scope, element, attrs, checkboxListCtrl) {
          checkboxListCtrl.addCheckboxItem(scope);
          // element.find('input')
          //   .on('change', function($event) {
          //     scope.$apply(function() {
          //     });
          //   });
        }
      };
    }]);
