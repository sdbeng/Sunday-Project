app.controller('meetupsController', ['$scope','$resource', function($scope,$resource){
	// $scope.meetupsCount = 23;

	//define our base URL resource for our Rest API, our model escentialy
	var Meetup = $resource('/api/meetups');

	//we define an array to temporarily hold meetups
	$scope.meetups = [
		{name: "meetup group 1"},
		{name: "meetup group 2"}
	]

	$scope.createMeetup = function(){
		// $scope.meetups.push({name: $scope.meetupName});
		// $scope.meetupName = '';

		//so once the rest api is defines, let's use it here,
		// first comment out 1st 2 lines inside this function
		//go ahead, create a new instance of the meetup
		var meetup = new Meetup();
		//then, set a property on that meetup and save it
		meetup.name = $scope.meetupName;
		meetup.$save(function(result){
			$scope.meetups.push(result);
			$scope.meetupName = '';
		});

	};
}]);

	
