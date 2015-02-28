'use strict';

/**
 * @ngdoc service
 * @name hcrcApp.CONFIG
 * @description
 * # CONFIG
 * Constant in the hcrcApp.
 */

angular.module('hcrcApp')
        .constant('CONFIG', {
            ENV: 'dev',
            DEV: {
                HOST: 'http://localhost:1337/'
            },
            PROD: {
                HOST: 'http://hcrc.co:1337/'
            }
        });