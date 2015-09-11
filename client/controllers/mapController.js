app.controller('mapController', function($scope, $stateParams, $location, add_resultsFactory, userFactory){
        $scope.result = $stateParams.results;
        var this_result = $scope.result

		userFactory.getUser(function(data){
			$scope.current_user = data;
		})
		userFactory.getResultCMP(function(data){
			$scope.userCMP = data;
			dataCMP = data;
		})
		userFactory.getResultFLP(this_result, function(data, data2){
			$scope.userFLP = data;
			$scope.singleFLP = data2;
		})
	})
