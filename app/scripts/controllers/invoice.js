'use strict';

/**
 * @ngdoc function
 * @name hcrcApp.controller:InvoiceCtrl
 * @description
 * # InvoiceCtrl
 * Controller of the hcrcApp
 */
angular.module('hcrcApp')
        .controller('InvoiceCtrl', ['$scope', 'invoiceFactory', function ($scope, invoiceFactory) {
                // Models
                $scope.invoices = [];

                // Get all invoices
                invoiceFactory.query(function (data) {
                    $scope.invoices = data;
                }, function (err) {
                    console.log(err);
                });
            }]);
