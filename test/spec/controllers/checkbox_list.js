'use strict';

describe('Controller: CheckboxListCtrl', function () {

  // load the controller's module
  beforeEach(module('angularCheckboxApp'));

  var CheckboxListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CheckboxListCtrl = $controller('CheckboxListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
