app.controller('formController', function($scope, $location, userFactory) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    // function to process the form
    $scope.processForm = function() {
    	console.log('getting to the controller');
        userFactory.addUser($scope.formData, function(data){
			$scope.current_user = data
			console.log(data);
			$location.path('/dashboard');

		})
	}
	$scope.login = function() {
		userFactory.loginUser($scope.existing_user, function(data){
			if(data.errors)
			{
				$scope.errors = data
				$location.path('/');
			}
			else
			{
				$scope.current_user = data
				console.log(data);
				$location.path('/dashboard');
			}
		})
	}
});
