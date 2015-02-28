'use strict';

/**
 * @ngdoc function
 * @name hcrcApp.controller:InvoiceprofileCtrl
 * @description
 * # InvoiceprofileCtrl
 * Controller of the hcrcApp
 */
angular.module('hcrcApp')
        .controller('InvoiceprofileCtrl', ['$routeParams', '$scope', 'invoiceFactory', function ($routeParams, $scope, invoiceFactory) {
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