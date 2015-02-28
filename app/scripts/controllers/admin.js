'use strict';

/**
 * @ngdoc function
 * @name hcrcApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the hcrcApp
 */

angular.module('hcrcApp')
        .controller('AdminCtrl', ['$scope', 'adminFactory', function ($scope, adminFactory) {
                // Models
                $scope.admins = [];

                // Functions
                $scope.initialize = function () {
                    // Indicate loading started
                    NProgress.start();
                    
                    // Get all admins
                    adminFactory.query(function (data) {
                        // Save
                        $scope.admins = data;

                        // Indicate loading completed
                        NProgress.done();
                    }, function (err) {
                        console.log(err);

                        // Indicate loading completed
                        NProgress.done();
                    });
                };

                // Run
                $scope.initialize();
            }]);