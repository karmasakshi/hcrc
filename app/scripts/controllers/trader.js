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

                // Functions
                $scope.initialize = function () {
                    // Indicate loading started
                    NProgress.start();
                    
                    // Get all traders
                    traderFactory.query(function (data) {
                        // Process
                        angular.forEach(data, function (trader) {
                            // Parse phone numbers
                            if (trader.phones !== null) {
                                trader.phones = trader.phones.split(',');
                            }
                            // Parse email addresses
                            if (trader.emails !== null) {
                                trader.emails = trader.emails.split(',');
                            }
                            
                            // Save
                            $scope.traders.push(trader);
                        });

                        // Indicate loading completed
                        NProgress.done();
                    }, function (err) {
                        console.log(err);

                        // Indicate loading completed
                        NProgress.done();
                    });
                };

                // Run
                $scope.initialize();
            }]);