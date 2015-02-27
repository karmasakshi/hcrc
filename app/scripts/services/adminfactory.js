'use strict';

/**
 * @ngdoc service
 * @name hcrcApp.adminFactory
 * @description
 * # adminFactory
 * Factory in the hcrcApp.
 */
angular.module('hcrcApp')
  .factory('adminFactory', function () {
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
