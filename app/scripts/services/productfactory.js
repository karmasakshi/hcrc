'use strict';

/**
 * @ngdoc service
 * @name hcrcApp.productFactory
 * @description
 * # productFactory
 * Factory in the hcrcApp.
 */
angular.module('hcrcApp')
  .factory('productFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    // return {
    //   someMethod: function () {
    //     return meaningOfLife;
    //   }
    // };
    return $resource("http://localhost:1337/product/:id");
  });
