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
                return CONFIG.ENV === 'dev' ? $resource(CONFIG.DEV.HOST + 'invoice/:id') : $resource(CONFIG.PROD.HOST + 'invoice/:id');
            }]);