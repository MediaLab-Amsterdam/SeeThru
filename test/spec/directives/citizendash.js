'use strict';

describe('Directive: citizendash', function () {

  // load the directive's module
  beforeEach(module('ecosenseUiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<citizendash></citizendash>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the citizendash directive');
  }));
});
