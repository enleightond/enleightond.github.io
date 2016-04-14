app.controller("SiteCtrl", function($scope, $location){

});

app.controller("ProjectCtrl", function($scope, $location){

	$scope.projects = [{
		projectName:"portfolioSite",
		projectImg: "http://placekitten.com/200/300",
		projectLink: "https://github.com/enleightond/enleightond.github.io"
	},
	{
		projectName:"twitchMe",
		projectImg: "http://placekitten.com/200/300",
		projectLink: "https://github.com/enleightond/AngularTwitch"
	}
]})
