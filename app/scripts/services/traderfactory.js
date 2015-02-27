'use strict';

/**
 * @ngdoc service
 * @name hcrcApp.traderFactory
 * @description
 * # traderFactory
 * Factory in the hcrcApp.
 */
angular.module('hcrcApp')
  .factory('traderFactory', function () {
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
