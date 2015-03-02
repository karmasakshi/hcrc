'use strict';

/**
 * @ngdoc service
 * @name hcrcApp.invoiceproductFactory
 * @description
 * # invoiceproductFactory
 * Factory in the hcrcApp.
 */

angular.module('hcrcApp')
        .factory('invoiceproductFactory', ['$resource', 'CONFIG', function ($resource, CONFIG) {
                return (CONFIG.ENV === 'dev' ?
                        $resource(CONFIG.DEV.HOST + '_invoiceproduct/:id', {}, {update: {method: 'PUT'}})
                        :
                        $resource(CONFIG.PROD.HOST + '_invoiceproduct/:id', {}, {update: {method: 'PUT'}}));
            }]);