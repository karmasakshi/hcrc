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

                // Get all products
                productFactory.query(function (data) {
                    $scope.products = data;

                    // Indicate loading complete
                    NProgress.done();
                }, function (err) {
                    console.log(err);

                    // Indicate loading complete
                    NProgress.done();
                });

//            product.get({id: 1}, function (data) {
//                console.log(data);
//                $scope.products = data;
//            }, function (err) {
//                console.log('Fat gaya bc.');
//            });
//
//            product.save({name: 'IOkC'}, {name: 'JituIOC'}, function (data) {
//                console.log(data);
//            }, function (err) {
//                console.log('Fat gaya bc.');
//            });
//
//            product.query(function (data) {
//                console.log(data);
//                $scope.products = data;
//            });
//
//            product.delete({id: 1});
            }]);