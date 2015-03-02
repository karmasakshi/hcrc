'use strict';

/**
 * @ngdoc service
 * @name hcrcApp.utilityFactory
 * @description
 * # utilityFactory
 * Factory in the hcrcApp.
 */

angular.module('hcrcApp')
        .factory('utilityFactory', function () {
            return {
                processQuery: function (query) {
                    switch (query.active) {
                        case true:
                            query.active = 1;
                            break;
                        case false:
                            query.active = 0;
                            break
                        default:
                            delete query.active;
                    }

                    return query;
                }
            };
        });