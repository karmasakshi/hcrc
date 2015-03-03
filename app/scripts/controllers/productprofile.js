'use strict';

/**
 * @ngdoc function
 * @name hcrcApp.controller:ProductProfileCtrl
 * @description
 * # ProductProfileCtrl
 * Controller of the hcrcApp
 */

angular.module('hcrcApp')
        .controller('ProductProfileCtrl', ['$location', '$routeParams', '$scope', 'productFactory', 'utilityFactory', function ($location, $routeParams, $scope, productFactory, utilityFactory) {
                /* MODELS */
                $scope.createMode = false;
                $scope.editMode = false;
                $scope.product = {};
                $scope.productCopy = {};

                /* FUNCTIONS */
                $scope.getData = function (id) {
                    productFactory.get({id: id}, function (data) {
                        $scope.processData(data);
                    }, function (err) {
                        console.log(err);
                        $location.url('/error');

                        // Indicate loading completed
                        NProgress.done();
                    });
                };

                $scope.processData = function (data) {
                    // Convert time to readable format
                    data = utilityFactory.processTimestamp(data);

                    // Save for rendering
                    $scope.product = data;
                    // Save a copy
                    $scope.productCopy = angular.copy($scope.product);

                    // Disable edit mode after successful update
                    $scope.editMode = false;

                    // Indicate loading completed
                    NProgress.done();
                };

                $scope.saveData = function () {
                    // Indicate loading started
                    NProgress.start();

                    $scope.product.$save(function (data) {
                        $location.url('/product/' + data.id);
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
                    $scope.product = angular.copy($scope.productCopy);

                    // Remove timestamps
                    $scope.product = utilityFactory.removeTimestamp($scope.product);

                    $scope.product.active = !$scope.product.active;

                    // Update
                    $scope.product.$update({id: $scope.product.id}, function (data) {
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
                        $scope.product = angular.copy($scope.productCopy);
                    }

                    $scope.editMode = !$scope.editMode;
                };

                $scope.updateData = function () {
                    // Indicate loading started
                    NProgress.start();

                    // Remove timestamps
                    $scope.product = utilityFactory.removeTimestamp($scope.product);

                    // Update
                    $scope.product.$update({id: $scope.product.id}, function (data) {
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
                    $scope.product = new productFactory;

                    $scope.createMode = true;
                    $scope.editMode = true;
                } else {
                    // Indicate loading started
                    NProgress.start();

                    $scope.getData($routeParams.id);
                }
            }]);