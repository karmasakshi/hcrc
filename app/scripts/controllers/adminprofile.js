'use strict';

/**
 * @ngdoc function
 * @name hcrcApp.controller:AdminProfileCtrl
 * @description
 * # AdminProfileCtrl
 * Controller of the hcrcApp
 */

angular.module('hcrcApp')
        .controller('AdminProfileCtrl', ['$location', '$routeParams', '$scope', 'adminFactory', 'utilityFactory', function ($location, $routeParams, $scope, adminFactory, utilityFactory) {
                /* MODELS */
                $scope.admin = {};
                $scope.adminCopy = {};
                $scope.createMode = false;
                $scope.editMode = false;

                /* FUNCTIONS */
                $scope.getData = function (id) {
                    adminFactory.get({id: id}, function (data) {
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
                    $scope.admin = data;
                    // Save a copy
                    $scope.adminCopy = angular.copy($scope.admin);

                    // Disable edit mode after successful update
                    $scope.editMode = false;

                    // Indicate loading completed
                    NProgress.done();
                };

                $scope.saveData = function () {
                    // Indicate loading started
                    NProgress.start();

                    $scope.admin.$save(function (data) {
                        $location.url('/admin/' + data.id);
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
                    $scope.admin = angular.copy($scope.adminCopy);

                    // Remove timestamps
                    $scope.admin = utilityFactory.removeTimestamp($scope.admin);

                    $scope.admin.active = !$scope.admin.active;

                    // Update
                    $scope.admin.$update({id: $scope.admin.id}, function (data) {
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
                        $scope.admin = angular.copy($scope.adminCopy);
                    }

                    $scope.editMode = !$scope.editMode;
                };

                $scope.updateData = function () {
                    // Indicate loading started
                    NProgress.start();

                    // Remove timestamps
                    $scope.admin = utilityFactory.removeTimestamp($scope.admin);

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
                    $scope.admin = new adminFactory;

                    $scope.createMode = true;
                    $scope.editMode = true;
                } else {
                    // Indicate loading started
                    NProgress.start();

                    $scope.getData($routeParams.id);
                }
            }]);