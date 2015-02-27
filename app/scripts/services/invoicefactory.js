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
            return CONFIG.ENV === 'dev' ? $resource(CONFIG.DEV.HOST + 'invoice/:id') : $resource(CONFIG.PROD.HOST + 'invoice/:id');
        });
