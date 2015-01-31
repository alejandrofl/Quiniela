
var quinielaModule=angular.module('quinielaModule',['ngRoute'])
	.config(function($routeProvider,$locationProvider){
		$routeProvider.when('/MatchForecast',{templateUrl:'/templates/Match_Forecast.html',controller : 'MatchForecastController'});
		$locationProvider.html5Mode(true);
	});