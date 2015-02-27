'use strict';

/**
 * @ngdoc function
 * @name hcrcApp.controller:TraderCtrl
 * @description
 * # TraderCtrl
 * Controller of the hcrcApp
 */
angular.module('hcrcApp')
        .controller('TraderCtrl', ['$scope', 'traderFactory', function ($scope, traderFactory) {
            // Models
            $scope.traders;

            // Get all traders
            traderFactory.query(function (data) {
                $scope.traders = data;
            }, function (err) {
                console.log(err);
            });
        }]);
