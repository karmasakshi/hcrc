'use strict';

/**
 * @ngdoc function
 * @name hcrcApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the hcrcApp
 */

angular.module('hcrcApp')
        .controller('ProductCtrl', ['$scope', 'productFactory', 'utilityFactory', function ($scope, productFactory, utilityFactory) {
                // Models
                $scope.query = {
                    active: true,
                    limit: 10,
                    skip: 0,
                    sort: 'id ASC'
                };
                $scope.products = [];

                // Functions
                $scope.initialize = function () {
                    // Indicate loading started
                    NProgress.start();

                    // Get all products
                    productFactory.query(utilityFactory.processQuery($scope.query), function (data) {
                        // Save
                        $scope.products = data;

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