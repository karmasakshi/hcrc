'use strict';

/**
 * @ngdoc function
 * @name hcrcApp.controller:InvoiceProfileCtrl
 * @description
 * # InvoiceProfileCtrl
 * Controller of the hcrcApp
 */

angular.module('hcrcApp')
        .controller('InvoiceProfileCtrl', ['$routeParams', '$scope', 'invoiceFactory', function ($routeParams, $scope, invoiceFactory) {
                // Models
                $scope.invoice;

                invoiceFactory.get({id: $routeParams.id}, function (data) {
                    $scope.invoice = data;

                    // Indicate loading complete
                    NProgress.done();
                }, function (err) {
                    console.log(err);

                    // Indicate loading complete
                    NProgress.done();
                });
            }]);