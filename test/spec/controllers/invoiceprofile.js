'use strict';

describe('Controller: InvoiceprofileCtrl', function () {

  // load the controller's module
  beforeEach(module('hcrcApp'));

  var InvoiceprofileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InvoiceprofileCtrl = $controller('InvoiceprofileCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
