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
                $scope.products = [];

                // Functions
                $scope.initialize = function () {
                    // Indicate loading started
                    NProgress.start();

                    // Get all products
                    productFactory.query(function (data) {
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