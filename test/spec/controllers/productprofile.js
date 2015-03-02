'use strict';

describe('Controller: ProductProfileCtrl', function () {

    // load the controller's module
    beforeEach(module('hcrcApp'));

    var ProductProfileCtrl,
            scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ProductProfileCtrl = $controller('ProductProfileCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });
});