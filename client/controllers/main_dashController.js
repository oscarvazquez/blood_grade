app.controller('main_dashController', function($scope, $location, add_resultsFactory, userFactory){
		userFactory.getUser(function(data){
			$scope.current_user = data;
		})
		userFactory.getResultCMP(function(data){
			$scope.userCMP = data;
		})
		userFactory.getResultFLP(3, function(data, data2){
			$scope.userFLP = data;
		})
})