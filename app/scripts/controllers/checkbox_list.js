'use strict';

/**
 * @ngdoc function
 * @name angularCheckboxApp.controller:CheckboxListCtrl
 * @description
 * # CheckboxListCtrl
 * Controller of the angularCheckboxApp
 */
angular.module('angularCheckboxApp')
  .controller('CheckboxListCtrl', [
    '$scope',
    '$log',
    function ($scope, $log) {
      this.checkboxItems = [];

      this.addCheckboxItem = function(checkboxItem) {
        this.checkboxItems.push(checkboxItem);

        var self = this;
        checkboxItem.$on('$destroy', function() {
          self.removeCheckboxItem(checkboxItem);
        });

        checkboxItem.$watch('item.checked', function(newValue, oldValue) {
          $log.debug('item changed: %s > %s', oldValue, newValue);
          $scope.enabled = newValue;
        });
      };

      this.removeCheckboxItem = function(checkboxItem) {
        var index = this.checkboxItems.indexOf(checkboxItem);
        this.checkboxItems.splice(index, 1);
      };
    }]);
