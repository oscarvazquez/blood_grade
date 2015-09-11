app.controller('addResultController', function($scope, $location, add_resultsFactory, userFactory){
		userFactory.getUser(function(data){
			$scope.current_user = data;
		})
		$scope.addResultFLP = function() {
			$scope.new_resultsFLP.userID = $scope.current_user._id;
			console.log($scope.new_resultsFLP)
			add_resultsFactory.addResultFLP($scope.new_resultsFLP, function(data){
				$scope.new_FLP = data;
				// $location.path('/dashboard')
			})
		}
		$scope.addResultCMP = function() {
			$scope.new_resultsCMP.userID = $scope.current_user._id;
			console.log($scope.new_resultsCMP)
			add_resultsFactory.addResultCMP($scope.new_resultsCMP, function(data){
				$scope.new_CMP = data;
				$location.path('/dashboard')
			})
		}
	})
