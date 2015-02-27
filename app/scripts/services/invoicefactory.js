'use strict';

/**
 * @ngdoc service
 * @name hcrcApp.invoiceFactory
 * @description
 * # invoiceFactory
 * Factory in the hcrcApp.
 */
angular.module('hcrcApp')
  .factory('invoiceFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
