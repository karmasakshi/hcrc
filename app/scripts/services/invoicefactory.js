'use strict';

/**
 * @ngdoc service
 * @name hcrcApp.invoiceFactory
 * @description
 * # invoiceFactory
 * Factory in the hcrcApp.
 */

angular.module('hcrcApp')
        .factory('invoiceFactory', ['$resource', 'CONFIG', function ($resource, CONFIG) {
                return (CONFIG.ENV === 'dev' ?
                        $resource(CONFIG.DEV.HOST + 'invoice/:id', {}, {update: {method: 'PUT'}})
                        :
                        $resource(CONFIG.PROD.HOST + 'invoice/:id', {}, {update: {method: 'PUT'}}));
            }]);