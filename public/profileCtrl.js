angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	$scope.$on('$viewContentLoaded', function() {
	    var promise = friendService.getFriends()
			promise.then(function (response) {
				$scope.currentUser = response.data.currentUser[0]
				$scope.friends = response.data.friends
			})
	});
	// FIX ME - assign values to $scope.currentUser and $scope.friends
});
