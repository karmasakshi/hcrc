'use strict';

/**
 * @ngdoc function
 * @name hcrcApp.controller:TraderProfileCtrl
 * @description
 * # TraderProfileCtrl
 * Controller of the hcrcApp
 */

angular.module('hcrcApp')
        .controller('TraderProfileCtrl', ['$routeParams', '$scope', 'traderFactory', function ($routeParams, $scope, traderFactory) {
                // Models
                $scope.trader;

                traderFactory.get({id: $routeParams.id}, function (data) {
                    $scope.trader = data;

                    // Indicate loading complete
                    NProgress.done();
                }, function (err) {
                    console.log(err);

                    // Indicate loading complete
                    NProgress.done();
                });
            }]);