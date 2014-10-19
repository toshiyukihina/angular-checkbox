'use strict';

/**
 * @ngdoc directive
 * @name angularCheckboxApp.directive:checkboxList
 * @description
 * # checkboxList
 */
angular.module('angularCheckboxApp')
  .directive('checkboxList', [
    '$log',
    function($log) {
      return {
        restrict: 'EA',
        scope: {
          enabled: '=checkboxListEnabled'
        },
        controller: 'CheckboxListCtrl',
        link: function(scope, element, attrs, checkboxListCtrl) {
          $log.debug(checkboxListCtrl);

          scope.$watch('enabled', function(newValue, oldValue) {
            //$log.debug(checkboxListCtrl);
            if (angular.isDefined(newValue)) {
            }
          });
        }
      };
    }]);
