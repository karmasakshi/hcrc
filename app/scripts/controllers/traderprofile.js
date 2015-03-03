'use strict';

/**
 * @ngdoc function
 * @name hcrcApp.controller:TraderProfileCtrl
 * @description
 * # TraderProfileCtrl
 * Controller of the hcrcApp
 */

angular.module('hcrcApp')
        .controller('TraderProfileCtrl', ['$location', '$routeParams', '$scope', 'traderFactory', 'utilityFactory', function ($location, $routeParams, $scope, traderFactory, utilityFactory) {
                /* MODELS */
                $scope.createMode = false;
                $scope.editMode = false;
                $scope.trader = {};
                $scope.traderCopy = {};

                /* FUNCTIONS */
                $scope.getData = function (id) {
                    traderFactory.get({id: id}, function (data) {
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
                    $scope.trader = data;
                    // Save a copy
                    $scope.traderCopy = angular.copy($scope.trader);

                    // Disable edit mode after successful update
                    $scope.editMode = false;

                    // Indicate loading completed
                    NProgress.done();
                };

                $scope.saveData = function () {
                    // Indicate loading started
                    NProgress.start();

                    $scope.trader.$save(function (data) {
                        $location.url('/trader/' + data.id);
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
                    $scope.trader = angular.copy($scope.traderCopy);

                    // Remove timestamps
                    $scope.trader = utilityFactory.removeTimestamp($scope.trader);

                    $scope.trader.active = !$scope.trader.active;

                    // Update
                    $scope.trader.$update({id: $scope.trader.id}, function (data) {
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
                        $scope.trader = angular.copy($scope.traderCopy);
                    }

                    $scope.editMode = !$scope.editMode;
                };

                $scope.updateData = function () {
                    // Indicate loading started
                    NProgress.start();

                    // Remove timestamps
                    $scope.trader = utilityFactory.removeTimestamp($scope.trader);

                    // Update
                    $scope.trader.$update({id: $scope.trader.id}, function (data) {
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
                    $scope.trader = new traderFactory;

                    $scope.createMode = true;
                    $scope.editMode = true;
                } else {
                    // Indicate loading started
                    NProgress.start();

                    $scope.getData($routeParams.id);
                }
            }]);