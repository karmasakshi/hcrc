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
                /* MODELS */
                $scope.admins = [];
                $scope.query = {
                    active: true,
                    limit: 100,
                    skip: 0,
                    sort: 'id ASC'
                };

                /* FUNCTIONS */
                $scope.initialize = function () {
                    // Indicate loading started
                    NProgress.start();

                    // Get all admins
                    adminFactory.query(utilityFactory.processQuery($scope.query), function (data) {
                        // Save for rendering
                        $scope.admins = data;

                        // Indicate loading completed
                        NProgress.done();
                    }, function (err) {
                        console.log(err);

                        // Indicate loading completed
                        NProgress.done();
                    });
                };

                /* RUN */
                $scope.initialize();
            }]);