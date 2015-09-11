var resultController = require('./../controllers/results.js')


module.exports = function(app){
	app.post('/add_resultFLP', function(req, res){
		resultController.addResultFLP(req, res);
	})
	app.post('/add_resultCMP', function(req, res){
		resultController.addResultCMP(req, res);
	})
	app.post('/add_user', function(req, res) {
		console.log('getting to the routers')
		resultController.addUser(req, res);
	})
	app.post('/get_user', function(req, res){
		resultController.getUser(req, res);
	})
	app.post('/login_user', function(req, res){
		resultController.loginUser(req, res);
	})
	app.get('/latest_resultCMP', function(req, res){
		resultController.get_latest_resultCMP(req, res);
	})
	app.get('/latest_resultFLP', function(req, res){
		resultController.get_latest_resultFLP(req, res);
	})	
}
