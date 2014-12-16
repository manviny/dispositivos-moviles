'use strict';

/**
 * @ngdoc overview
 * @name braseroApp
 * @description
 * # braseroApp
 *
 * Main module of the application.
 */
angular
  .module('braseroApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'onsen'
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
      .when('/eltiempo', {
        templateUrl: 'views/eltiempo.html',
        controller: 'EltiempoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
