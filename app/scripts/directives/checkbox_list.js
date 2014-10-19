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
        link: function(scope, element, attrs) {
          scope.$watch('enabled', function(newValue, oldValue) {
            if (angular.isDefined(newValue)) {
              $log.debug('enable: %s > %s', oldValue, newValue);
              if (newValue) {
                // TODO: check all items
              } else {
                // TODO: uncheck all items
              }
            }
          });
        }
      };
    }]);
