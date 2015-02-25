'use strict';

describe('Controller: TraderCtrl', function () {

  // load the controller's module
  beforeEach(module('hcrcApp'));

  var TraderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TraderCtrl = $controller('TraderCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
