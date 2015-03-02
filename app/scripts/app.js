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
            'ngRoute',
            'ngSanitize'
        ])
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    })
                    .when('/product', {
                        templateUrl: 'views/product.html',
                        controller: 'ProductCtrl'
                    })
                    .when('/product/:id', {
                        templateUrl: 'views/productprofile.html',
                        controller: 'ProductProfileCtrl'
                    })
                    .when('/admin', {
                        templateUrl: 'views/admin.html',
                        controller: 'AdminCtrl'
                    })
                    .when('/admin/:id', {
                        templateUrl: 'views/adminprofile.html',
                        controller: 'AdminProfileCtrl'
                    })
                    .when('/trader', {
                        templateUrl: 'views/trader.html',
                        controller: 'TraderCtrl'
                    })
                    .when('/trader/:id', {
                        templateUrl: 'views/traderprofile.html',
                        controller: 'TraderProfileCtrl'
                    })
                    .when('/invoice', {
                        templateUrl: 'views/invoice.html',
                        controller: 'InvoiceCtrl'
                    })
                    .when('/invoice/:id', {
                        templateUrl: 'views/invoiceprofile.html',
                        controller: 'InvoiceProfileCtrl'
                    })
                    .when('/report', {
                        templateUrl: 'views/report.html',
                        controller: 'ReportCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
        })
        .run(function ($location, $rootScope) {
            $rootScope.$on('$routeChangeStart', function () {
                NProgress.start();
            });
            $rootScope.$on('$routeChangeSuccess', function () {
                $rootScope.navtab = $location.path().split('/')[1];
                NProgress.done();
            });
        });