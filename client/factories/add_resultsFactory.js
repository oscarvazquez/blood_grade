app.factory('add_resultsFactory', function($http){
	var factory = {}
		factory.addResultFLP = function(info, callback) {
			$http.post('/add_resultFLP', info).success(function(output){
				callback(output);
			});
		}
		factory.addResultCMP = function(info, callback) {
			$http.post('/add_resultCMP', info).success(function(output){
				callback(output);
			});
		}
	return factory;
})
