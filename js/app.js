var app = angular.module('portfolio', ['ngRoute']);

app.config('$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:"./views/home.html",
			controller: "SiteCtrl"
		}).when ('/portfolio', {
			templateUrl:"./views/portfolio.html",
			controller: "SiteCtrl"
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