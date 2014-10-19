'use strict';

/**
 * @ngdoc function
 * @name angularCheckboxApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularCheckboxApp
 */
angular.module('angularCheckboxApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
