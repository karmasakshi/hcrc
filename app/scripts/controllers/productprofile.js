'use strict';

/**
 * @ngdoc function
 * @name hcrcApp.controller:ProductprofileCtrl
 * @description
 * # ProductprofileCtrl
 * Controller of the hcrcApp
 */
angular.module('hcrcApp')
        .controller('ProductprofileCtrl', ['$routeParams', '$scope', 'productFactory', function ($routeParams, $scope, productFactory) {
                // Models
                $scope.product;

                productFactory.get({id: $routeParams.id}, function (data) {
                    $scope.product = data;

                    // Indicate loading complete
                    NProgress.done();
                }, function (err) {
                    console.log(err);

                    // Indicate loading complete
                    NProgress.done();
                });
            }]);