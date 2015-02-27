'use strict';

/**
 * @ngdoc function
 * @name hcrcApp.controller:TraderCtrl
 * @description
 * # TraderCtrl
 * Controller of the hcrcApp
 */
angular.module('hcrcApp')
        .controller('TraderCtrl', ['$scope', 'traderFactory', function ($scope, traderFactory) {
            // Models
            $scope.traders = [];

            // Get all traders
            traderFactory.query(function (data) {
                angular.forEach(data, function(trader){
                    if(trader.phones !== null){
                        trader.phones = trader.phones.split(',');
                    }
                    if(trader.emails !== null){
                        trader.emails = trader.emails.split(',');
                    }
                    $scope.traders.push(trader);
                });
            }, function (err) {
                console.log(err);
            });
        }]);
