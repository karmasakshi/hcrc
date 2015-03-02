'use strict';

/**
 * @ngdoc function
 * @name hcrcApp.controller:TraderCtrl
 * @description
 * # TraderCtrl
 * Controller of the hcrcApp
 */

angular.module('hcrcApp')
        .controller('TraderCtrl', ['$scope', 'traderFactory', 'utilityFactory', function ($scope, traderFactory, utilityFactory) {
                /* MODELS */
                $scope.query = {
                    active: true,
                    limit: 10,
                    skip: 0,
                    sort: 'id ASC'
                };
                $scope.traders = [];

                /* FUNCTIONS */
                $scope.initialize = function () {
                    // Indicate loading started
                    NProgress.start();

                    // Get all traders
                    traderFactory.query(utilityFactory.processQuery($scope.query), function (data) {
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

                            // Save for rendering
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

                /* RUN */
                $scope.initialize();
            }]);