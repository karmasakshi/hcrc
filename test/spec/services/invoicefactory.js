'use strict';

describe('Service: invoiceFactory', function () {

  // load the service's module
  beforeEach(module('hcrcApp'));

  // instantiate service
  var invoiceFactory;
  beforeEach(inject(function (_invoiceFactory_) {
    invoiceFactory = _invoiceFactory_;
  }));

  it('should do something', function () {
    expect(!!invoiceFactory).toBe(true);
  });

});
