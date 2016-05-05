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
		projectImg: "../images/twitchMePic.png",
		projectLink: "https://github.com/enleightond/AngularTwitch"
	},
	{
		projectName:"Mean Tea",
		projectImg: "../images/myMeanTeaPic.png",
		projectLink: "https://github.com/enleightond/myMeanTea"
	},
	{
		projectName:"Event Finder",
		projectImg: "../images/epicEventsPic.png",
		projectLink: "https://github.com/enleightond/event-finder"
	}
]})
