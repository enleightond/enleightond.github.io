var app = angular.module('myPortfolio', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when("/", {
			templateUrl:"./views/home.html",
			controller: "SiteCtrl"
		}).when ('/portfolio', {
			templateUrl:"./views/portfolio.html",
			controller: "ProjectCtrl"
		}).when ('/resume', {
			templateUrl:"./views/resume.html",
			controller:"SiteCtrl"
		}).when ('/contact', {
			templateUrl:"./views/contact.html",
			controller:"SiteCtrl"
		}).otherwise ({
			redirectTo: "/"
		});
});