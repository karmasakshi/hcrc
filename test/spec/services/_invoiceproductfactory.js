'use strict';

describe('Service: invoiceproductFactory', function () {

  // load the service's module
  beforeEach(module('hcrcApp'));

  // instantiate service
  var invoiceproductFactory;
  beforeEach(inject(function (_invoiceproductFactory_) {
    invoiceproductFactory = _invoiceproductFactory_;
  }));

  it('should do something', function () {
    expect(!!invoiceproductFactory).toBe(true);
  });

});
