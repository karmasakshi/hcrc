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
                processTimestamp: function (data) {
                    data.createdAt = moment(data.createdAt).fromNow();
                    data.updatedAt = moment(data.updatedAt).fromNow();

                    return data;
                },
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
                },
                removeTimestamp: function (data) {
                    delete data.createdAt;
                    delete data.updatedAt;

                    return data;
                }
            };
        });