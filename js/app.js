var app = angular.module('myPortfolio', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:"./views/portfolio.html",
			controller: "SiteCtrl"
		}).when ('/about', {
			templateUrl:"./views/about.html",
			controller: "ProjectCtrl"
		}).when ('/resume', {
			templateUrl:"./views/resume.html",
			controller:"SiteCtrl"
		}).otherwise ({
			redirectTo: "/"
		});
});