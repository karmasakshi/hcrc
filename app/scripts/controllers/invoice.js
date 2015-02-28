'use strict';

/**
 * @ngdoc function
 * @name hcrcApp.controller:InvoiceCtrl
 * @description
 * # InvoiceCtrl
 * Controller of the hcrcApp
 */

angular.module('hcrcApp')
        .controller('InvoiceCtrl', ['$scope', 'adminFactory', 'invoiceFactory', 'traderFactory', function ($scope, adminFactory, invoiceFactory, traderFactory) {
                // Models
                $scope.invoices = [];

                // Functions
                $scope.initialize = function () {
                    // Indicate loading started
                    NProgress.start();

                    // Get all invoices
                    invoiceFactory.query(function (data) {
                        // Process
                        angular.forEach(data, function (invoice) {
                            // Get associated data
                            traderFactory.get({id: invoice.trader}, function (data) {
                                invoice.trader = data.name;
                            });

                            // Get associated data
                            adminFactory.get({id: invoice.addedby}, function (data) {
                                invoice.addedby = data.username;
                            });

                            // Convert time to readable format
                            invoice.date = moment(invoice.date).fromNow();

                            // Save
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

                // Run
                $scope.initialize();
            }]);