'use strict';

/**
 * @ngdoc function
 * @name hcrcApp.controller:AdminprofileCtrl
 * @description
 * # AdminprofileCtrl
 * Controller of the hcrcApp
 */
angular.module('hcrcApp')
        .controller('AdminprofileCtrl', ['$routeParams', '$scope', 'adminFactory', function ($routeParams, $scope, adminFactory) {
                // Models
                $scope.admin;
                $scope.admincopy;
                $scope.editmode = false;

                // Functions
                $scope.initialize = function (data) {
                    $scope.admin = data;

                    $scope.admin.createdAt = moment($scope.admin.createdAt).fromNow();
                    $scope.admin.updatedAt = moment($scope.admin.updatedAt).fromNow();

                    $scope.admincopy = angular.copy($scope.admin);

                    // Indicate loading complete
                    NProgress.done();
                };

                $scope.toggleEditMode = function () {
                    $scope.editmode = !$scope.editmode;
                    $scope.admin = angular.copy($scope.admincopy);
                };

                $scope.toggleActive = function () {
                    NProgress.start();
                    $scope.admincopy.active = !$scope.admincopy.active;

                    delete $scope.admincopy.createdAt;
                    delete $scope.admincopy.updatedAt;
                    
                    $scope.admincopy.$update({id: $scope.admincopy.id}, function (data) {
                        $scope.initialize(data);
                    }, function (err) {
                        console.log(err);

                        // Indicate loading complete
                        NProgress.done();
                    });
                };

                // Run
                adminFactory.get({id: $routeParams.id}, function (data) {
                    $scope.initialize(data);
                }, function (err) {
                    console.log(err);

                    // Indicate loading complete
                    NProgress.done();
                });
            }]);