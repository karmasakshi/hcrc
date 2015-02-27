'use strict';

/**
 * @ngdoc service
 * @name hcrcApp.productFactory
 * @description
 * # productFactory
 * Factory in the hcrcApp.
 */
angular.module('hcrcApp')
        .factory('productFactory', ['$resource', 'CONFIG', function ($resource, CONFIG) {
                // Service logic
                // ...

                var meaningOfLife = 42;

                // Public API here
                // return {
                //   someMethod: function () {
                //     return meaningOfLife;
                //   }
                // };
                return CONFIG.ENV === 'dev' ? $resource(CONFIG.DEV.HOST + 'product/:id') : $resource(CONFIG.PROD.HOST + 'product/:id');
            }]);
