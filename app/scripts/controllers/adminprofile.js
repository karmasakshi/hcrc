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

                        NProgress.done();
                    });
                };

                $scope.processData = function (data) {
                    data = utilityFactory.processTimestamp(data);

                    $scope.admin = data;
                    $scope.adminCopy = angular.copy($scope.admin);

                    $scope.editMode = false;

                    NProgress.done();
                };

                $scope.saveData = function () {
                    NProgress.start();
                    $scope.admin.$save(function (data) {
                        $location.url('/admin/' + data.id);
                        $scope.processData(data);

                        NProgress.done();
                    }, function(err){
                        console.log(err);
                        
                        NProgress.done();
                    });
                };

                $scope.toggleActive = function () {
                    NProgress.start();

                    $scope.admin = angular.copy($scope.adminCopy);

                    $scope.admin = utilityFactory.removeTimestamp($scope.admin);

                    $scope.admin.active = !$scope.admin.active;

                    $scope.admin.$update({id: $scope.admin.id}, function (data) {
                        $scope.processData(data);

                        NProgress.done();
                    }, function (err) {
                        console.log(err);

                        NProgress.done();
                    });
                };

                $scope.toggleEditMode = function () {
                    if ($scope.editMode) {
                        $scope.admin = angular.copy($scope.adminCopy);
                    }

                    $scope.editMode = !$scope.editMode;
                };

                $scope.updateData = function () {
                    NProgress.start();

                    $scope.admin = utilityFactory.removeTimestamp($scope.admin);

                    $scope.admin.$update({id: $scope.admin.id}, function (data) {
                        $scope.processData(data);

                        NProgress.done();
                    }, function (err) {
                        console.log(err);

                        NProgress.done();
                    });
                };

                /* RUN */
                if ($routeParams.id === 'new') {
                    $scope.admin = new adminFactory;
                    
                    $scope.createMode = true;
                    $scope.editMode = true;
                } else {
                    NProgress.start();

                    $scope.getData($routeParams.id);
                }
            }]);