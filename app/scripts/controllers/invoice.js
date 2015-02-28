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

                // Get all invoices
                invoiceFactory.query(function (data) {
                    angular.forEach(data, function (invoice) {
                        traderFactory.get({id: invoice.trader}, function (data) {
                            invoice.trader = data.name;
                        });
                        invoice.date = moment(invoice.date).fromNow();
                        adminFactory.get({id: invoice.addedby}, function (data) {
                            invoice.addedby = data.username;
                        });
                        $scope.invoices.push(invoice);
                    });
                }, function (err) {
                    console.log(err);
                });
            }]);
