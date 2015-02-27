'use strict';

describe('Service: adminFactory', function () {

  // load the service's module
  beforeEach(module('hcrcApp'));

  // instantiate service
  var adminFactory;
  beforeEach(inject(function (_adminFactory_) {
    adminFactory = _adminFactory_;
  }));

  it('should do something', function () {
    expect(!!adminFactory).toBe(true);
  });

});
