'use strict';

/**
 * @ngdoc function
 * @name hcrcApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the hcrcApp
 */
angular.module('hcrcApp')
  .controller('ProductCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
