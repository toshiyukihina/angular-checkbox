'use strict';

describe('Directive: checkboxList', function () {

  // load the directive's module
  beforeEach(module('angularCheckboxApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<checkbox-list></checkbox-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the checkboxList directive');
  }));
});
