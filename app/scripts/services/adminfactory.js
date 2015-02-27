'use strict';

/**
 * @ngdoc service
 * @name hcrcApp.adminFactory
 * @description
 * # adminFactory
 * Factory in the hcrcApp.
 */
angular.module('hcrcApp')
        .factory('adminFactory', ['$resource', 'CONFIG', function ($resource, CONFIG) {
                return CONFIG.ENV === 'dev' ? $resource(CONFIG.DEV.HOST + 'admin/:id') : $resource(CONFIG.PROD.HOST + 'admin/:id');
            }]);