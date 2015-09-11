
app.factory('userFactory', function($http) {
	var factory = {};
	var currentUser;
	var dataCMP;
    var dataFLP;
    var singleFLP = [];
	factory.addUser = function(info, callback) {
		console.log('getting to the factory')
		$http.post('/add_user', info).success(function(output){
			currentUser = output
			callback(output);
		})
	}
	factory.getUser = function(callback){
		callback(currentUser)
	}
	factory.getthisuser = function(info, callback){
		$http({url:'/get_this_user', method: 'get', params:{id:info}}).success(function(output){
			callback(output);
		})
	}
	factory.loginUser = function(info, callback){
		$http.post('/login_user', info).success(function(output){
			currentUser = output;
			callback(output);
		})
	}
	factory.getResultCMP = function(callback) {
		$http({url:'/latest_resultCMP', method: 'get', params:{id:currentUser._id}}).success(function(output){
			dataCMP = output;
			// for(var i = 0; i < dataCMP.results_cmp.lengthl i++)
			// {
			// 	new_data = [dataCMP.results_flp[i].chart_date.valueOf(), dataFLP.results_flp[i]]
			// }
			callback(output);
		})
	}
	factory.getResultFLP = function(resultre, callback) {
		$http({url:'/latest_resultFLP', method: 'get', params:{id:currentUser._id}}).success(function(output){
			dataFLP = output;
			console.log(resultre);
			counter = 1;
			for(var i = 0; i < dataFLP.results_flp.length; i++)
			{
				console.log(dataFLP.results_flp[i].chart_date.valueOf())
				console.log(dataFLP.results_flp[i].chart_date)

				new_data = [dataFLP.results_flp[i].chart_date.valueOf(), dataFLP.results_flp[i][resultre]];
				// console.log(new_data);
				singleFLP.push(new_data);
				// console.log(dataFLP.results_flp[i].created_at)
			}
			callback(output, singleFLP);
			singleFLP = [];
		})
	}
	// factory.getSpecificFLP = function(result, callback){
	// 	for(var i = 0; i < dataFLP.results_flp; i++){
	// 		singleFLP.push(dataFLP.results_flp[i].result)
	// 	}
	// 		callback(singleFLP);
	// }
	return factory
})

