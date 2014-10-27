'use strict';

/**
 * @ngdoc overview
 * @name jsConsoleApp
 * @description
 * # jsConsoleApp
 *
 * Main module of the application.
 */
angular
    .module('jsConsoleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angucomplete'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });