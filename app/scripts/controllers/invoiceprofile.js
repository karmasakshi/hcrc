'use strict';

/**
 * @ngdoc function
 * @name hcrcApp.controller:InvoiceProfileCtrl
 * @description
 * # InvoiceProfileCtrl
 * Controller of the hcrcApp
 */

angular.module('hcrcApp')
        .controller('InvoiceProfileCtrl', ['$location', '$routeParams', '$scope', 'invoiceFactory', 'invoiceproductFactory', 'productFactory', 'utilityFactory', function ($location, $routeParams, $scope, invoiceFactory, invoiceproductFactory, productFactory, utilityFactory) {
                /* MODELS */
                $scope.createMode = false;
                $scope.editMode = false;
                $scope.incoice = {};
                $scope.invoiceCopy = {};
                $scope.products = [];

                /* FUNCTIONS */
                $scope.getData = function (id) {
                    invoiceFactory.get({id: id}, function (data) {
                        $scope.processData(data);
                    }, function (err) {
                        console.log(err);
                        $location.url('/error');

                        // Indicate loading completed
                        NProgress.done();
                    });

                    invoiceproductFactory.query({limit: 100, sort: 'id ASC'}, function (data) {
                        angular.forEach(data, function (product) {
                            productFactory.get({id: product.product}, function (data) {
                                product.name = data.name;
                            }, function (err) {
                                console.log(err);
                            });
                            product.total = product.quantity*product.rate;
                            $scope.products.push(product);
                        });
                    }, function (err) {
                        console.log(err);

                        // Indicate loading completed
                        NProgress.done();
                    });
                };

                $scope.processData = function (data) {
                    // Convert time to readable format
                    data = utilityFactory.processTimestamp(data);

                    // Save for rendering
                    $scope.invoice = data;
                    // Save a copy
                    $scope.invoiceCopy = angular.copy($scope.invoice);

                    // Disable edit mode after successful update
                    $scope.editMode = false;

                    // Indicate loading completed
                    NProgress.done();
                };

                $scope.saveData = function () {
                    // Indicate loading started
                    NProgress.start();

                    $scope.invoice.$save(function (data) {
                        $location.url('/invoice/' + data.id);
                        $scope.processData(data);

                        // Indicate loading completed
                        NProgress.done();
                    }, function (err) {
                        console.log(err);

                        // Indicate loading completed
                        NProgress.done();
                    });
                };

                $scope.toggleActive = function () {
                    // Indicate loading started
                    NProgress.start();

                    // Discard any changes
                    $scope.invoice = angular.copy($scope.invoiceCopy);

                    // Remove timestamps
                    $scope.invoice = utilityFactory.removeTimestamp($scope.invoice);

                    $scope.invoice.active = !$scope.invoice.active;

                    // Update
                    $scope.invoice.$update({id: $scope.invoice.id}, function (data) {
                        $scope.processData(data);

                        // Disable edit mode after successful update
                        $scope.editMode = false;

                        // Indicate loading completed
                        NProgress.done();
                    }, function (err) {
                        console.log(err);

                        // Indicate loading completed
                        NProgress.done();
                    });
                };

                $scope.toggleEditMode = function () {
                    // Discard any changes
                    if ($scope.editMode) {
                        $scope.invoice = angular.copy($scope.invoiceCopy);
                    }

                    $scope.editMode = !$scope.editMode;
                };

                $scope.updateData = function () {
                    // Indicate loading started
                    NProgress.start();

                    // Remove timestamps
                    $scope.invoice = utilityFactory.removeTimestamp($scope.invoice);

                    // Update
                    $scope.admin.$update({id: $scope.admin.id}, function (data) {
                        $scope.processData(data);

                        // Indicate loading completed
                        NProgress.done();
                    }, function (err) {
                        console.log(err);

                        // Indicate loading completed
                        NProgress.done();
                    });
                };

                /* RUN */
                if ($routeParams.id === 'new') {
                    $scope.invoice = new invoiceFactory;

                    $scope.createMode = true;
                    $scope.editMode = true;
                } else {
                    // Indicate loading started
                    NProgress.start();

                    $scope.getData($routeParams.id);
                }
            }]);