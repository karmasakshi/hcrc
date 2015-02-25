'use strict';

/**
 * @ngdoc overview
 * @name hcrcApp
 * @description
 * # hcrcApp
 *
 * Main module of the application.
 */
angular
  .module('hcrcApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/invoice', {
        templateUrl: 'views/invoice.html',
        controller: 'InvoiceCtrl'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .when('/trader', {
        templateUrl: 'views/trader.html',
        controller: 'TraderCtrl'
      })
      .when('/product', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl'
      })
      .when('/report', {
        templateUrl: 'views/report.html',
        controller: 'ReportCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
