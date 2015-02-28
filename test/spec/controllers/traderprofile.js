'use strict';

describe('Controller: TraderprofileCtrl', function () {

  // load the controller's module
  beforeEach(module('hcrcApp'));

  var TraderprofileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TraderprofileCtrl = $controller('TraderprofileCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
