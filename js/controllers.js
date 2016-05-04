app.controller("SiteCtrl", function($scope, $location){

});

app.controller("ProjectCtrl", function($scope, $location){

	$scope.projects = [{
		projectName:"portfolioSite",
		projectImg: "../images/portfolioPic.png",
		projectLink: "https://github.com/enleightond/enleightond.github.io"
	},
	{
		projectName:"twitchMe",
		projectImg: "http://placekitten.com/300/400",
		projectLink: "https://github.com/enleightond/AngularTwitch"
	},
	{
		projectName:"Mean Tea",
		projectImg: "http://placekitten.com/300/400",
		projectLink: "https://github.com/enleightond/myMeanTea"
	},
	{
		projectName:"Event Finder",
		projectImg: "http://placekitten.com/300/400",
		projectLink: "https://github.com/milesflo/event-finder"
	}
]})
