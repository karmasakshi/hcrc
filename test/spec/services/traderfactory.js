'use strict';

describe('Service: traderFactory', function () {

  // load the service's module
  beforeEach(module('hcrcApp'));

  // instantiate service
  var traderFactory;
  beforeEach(inject(function (_traderFactory_) {
    traderFactory = _traderFactory_;
  }));

  it('should do something', function () {
    expect(!!traderFactory).toBe(true);
  });

});
