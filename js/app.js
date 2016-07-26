var app = angular.module('myPortfolio', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:"./views/portfolio.html",
			controller: "ProjectCtrl"
		}).when ('/about', {
			templateUrl:"./views/about.html",
			controller: "aboutCtrl"
		}).when ('/resume', {
			templateUrl:"./views/resume.html",
			controller:"SiteCtrl"
		}).otherwise ({
			redirectTo: "/"
		});
});