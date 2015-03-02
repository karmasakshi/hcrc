'use strict';

/**
 * @ngdoc function
 * @name hcrcApp.controller:InvoiceCtrl
 * @description
 * # InvoiceCtrl
 * Controller of the hcrcApp
 */

angular.module('hcrcApp')
        .controller('InvoiceCtrl', ['$scope', 'adminFactory', 'invoiceFactory', 'traderFactory', 'utilityFactory', function ($scope, adminFactory, invoiceFactory, traderFactory, utilityFactory) {
                /* MODELS */
                $scope.invoices = [];
                $scope.query = {
                    active: true,
                    limit: 100,
                    skip: 0,
                    sort: 'id ASC'
                };

                /* FUNCTIONS */
                $scope.initialize = function () {
                    // Indicate loading started
                    NProgress.start();

                    // Get all invoices
                    invoiceFactory.query(utilityFactory.processQuery($scope.query), function (data) {
                        // Process
                        angular.forEach(data, function (invoice) {
                            // Get associated data
                            traderFactory.get({id: invoice.trader}, function (data) {
                                invoice.trader = data.name;
                            }, function (err) {
                                console.log(err);

                                // Indicate loading completed
                                NProgress.done();
                            });

                            // Get associated data
                            adminFactory.get({id: invoice.addedby}, function (data) {
                                invoice.addedby = data.username;
                            }, function (err) {
                                console.log(err);

                                // Indicate loading completed
                                NProgress.done();
                            });

                            // Convert time to readable format
                            invoice.date = moment(invoice.date).fromNow();

                            // Save for rendering
                            $scope.invoices.push(invoice);
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