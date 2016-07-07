app.controller("SiteCtrl", function($scope, $location){

});

app.controller("ProjectCtrl", function($scope, $location){

	$scope.projects = [{
		projectName:"TwitchMe!",
		projectImg: "../images/twitchMePic.png",
		projectLink: "https://github.com/enleightond/AngularTwitch"
	},
	{
		projectName:"Mean Tea",
		projectImg: "../images/myMeanTeaPic.png",
		projectLink: "https://github.com/enleightond/myMeanTea"
	},
	{
		projectName:"Epic Events",
		projectImg: "../images/epicEventsPic.png",
		projectLink: "https://github.com/enleightond/event-finder"
	},
	{
		projectName:"Portfolio Site",
		projectImg: "../images/portfolioPic.png",
		projectLink: "https://github.com/enleightond/enleightond.github.io"
	}
]})
