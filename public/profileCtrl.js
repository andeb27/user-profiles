angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends

	$scope.getFriends = function() {
		console.log('howdy')
		friendService.getFriends().then(function(res) {
		console.log('friend', res)
		$scope.friends = res.data.friends;
		$scope.currentUser = res.data.person;
	})
	}
	$scope.getFriends();
});