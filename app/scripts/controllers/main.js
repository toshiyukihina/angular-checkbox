'use strict';

/**
 * @ngdoc function
 * @name angularCheckboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularCheckboxApp
 */
angular.module('angularCheckboxApp')
  .controller('MainCtrl', [
    '$scope',
    function($scope) {
      $scope.things = [{
        checked: true,
        title: 'HTML5 Boilerplate',
        description: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'
      }, {
        checked: false,
        title: 'Angular',
        description: 'AngularJS is a toolset for building the framework most suited to your application development.'
      }, {
        checked: true,
        title: 'Karma',
        description: 'Spectacular Test Runner for JavaScript.'
      }];
    }]);
