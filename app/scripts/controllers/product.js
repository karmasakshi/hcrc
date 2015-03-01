'use strict';

/**
 * @ngdoc function
 * @name hcrcApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the hcrcApp
 */

angular.module('hcrcApp')
        .controller('ProductCtrl', ['$scope', 'productFactory', function ($scope, productFactory) {
                // Models
                $scope.limit = 10;
                $scope.products = [];
                $scope.skip = 10;
                $scope.sort = 'id ASC';

                // Functions
                $scope.initialize = function () {
                    // Indicate loading started
                    NProgress.start();

                    // Get all products
                    productFactory.query({limit: $scope.limit, skip: $scope.skip, sort: $scope.sort}, function (data) {
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