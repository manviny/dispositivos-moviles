'use strict';

/**
 * @ngdoc function
 * @name braseroApp.controller:EltiempoCtrl
 * @description
 * # EltiempoCtrl
 * Controller of the braseroApp
 */
angular.module('braseroApp')
  .controller('EltiempoCtrl', function ($scope, $http) {

  	$scope.buscaEltiempo = function(ciudad){
	    $http.get('http://api.openweathermap.org/data/2.5/find?q='+ciudad+',es&units=metric&lang=sp')
	    .success(function(datosTiempo) {
	        $scope.miCiudad= datosTiempo;
	    })
	}
  });
