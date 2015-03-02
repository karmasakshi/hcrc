'use strict';

/**
 * @ngdoc function
 * @name hcrcApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the hcrcApp
 */

angular.module('hcrcApp')
        .controller('AdminCtrl', ['$scope', 'adminFactory', 'utilityFactory', function ($scope, adminFactory, utilityFactory) {
                // Models
                $scope.admins = [];
                $scope.query = {
                    active: true,
                    limit: 10,
                    skip: 0,
                    sort: 'id ASC'
                };
                
                // Functions
                $scope.initialize = function () {
                    // Indicate loading started
                    NProgress.start();

                    // Get all admins
                    adminFactory.query(utilityFactory.processQuery($scope.query), function (data) {
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