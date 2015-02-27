'use strict';

/**
 * @ngdoc service
 * @name hcrcApp.reportFactory
 * @description
 * # reportFactory
 * Factory in the hcrcApp.
 */
angular.module('hcrcApp')
  .factory('reportFactory', function () {
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
