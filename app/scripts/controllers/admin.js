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

                // Get all admins
                adminFactory.query(function (data) {
                    $scope.admins = data;
                }, function (err) {
                    console.log(err);
                });
            }]);