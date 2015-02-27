'use strict';

/**
 * @ngdoc service
 * @name hcrcApp.traderFactory
 * @description
 * # traderFactory
 * Factory in the hcrcApp.
 */
angular.module('hcrcApp')
        .factory('traderFactory', ['$resource', 'CONFIG', function ($resource, CONFIG) {
                return CONFIG.ENV === 'dev' ? $resource(CONFIG.DEV.HOST + 'trader/:id') : $resource(CONFIG.PROD.HOST + 'trader/:id');
            }]);