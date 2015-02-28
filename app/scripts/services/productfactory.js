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
                return (CONFIG.ENV === 'dev' ?
                        $resource(CONFIG.DEV.HOST + 'product/:id', {}, {update: {method: 'PUT'}})
                        :
                        $resource(CONFIG.PROD.HOST + 'product/:id', {}, {update: {method: 'PUT'}}));
            }]);