var mongoose = require('mongoose');
var resultFLP = mongoose.model('FLP_result');
var resultCMP = mongoose.model('CMP_result');
var user = mongoose.model('user');
var moment = require('moment');

module.exports = (function() {
	return {
		addUser: function(req, res){
			var max_chol = 210;
			var min_trig;
			var max_trig;
			var min_hdl;
			var max_ldl = 130;
			var age = req.body.age
			var sex = req.body.sex
			var smoke = req.body.smoke
			var description = req.body.description
			if(age <= 29)
			{
				min_trig = 54;
				max_trig = 104;
			}
			else if(age >= 30 && age <= 39)
			{
				min_trig = 55;
				max_trig = 115;
			}
			else if(age >= 40 && age <= 49)
			{
				min_trig = 66;
				max_trig = 139;
			}
			else if(age >= 50 && age <= 59)
			{
				min_trig = 75;
				max_trig = 163;
			}
			else if(age >= 60 && age <= 69)
			{
				min_trig = 78;
				max_trig = 158;
			}
			else if(age >= 70)
			{
				min_trig = 83;
				max_trig = 141;
			}
			if(sex == 'male')
			{
				min_hdl = 40
			}
			if(sex == 'female')
			{
				min_hdl = 50
			}
			if(smoke == 'yes')
			{
				max_trig += 10;
				max_chol += 10;
			}
			if(description == 'heart disease')
			{
				max_trig -= 10;
				max_chol -= 10;
			}


			var new_user = new user({ user_name: req.body.user_name, 
									email: req.body.email, 
									password: req.body.password, 
									bloodtype: req.body.blood_type, 
									city: req.body.city, 
									state: req.body.state, 
									age: req.body.age, 
									sex: req.body.sex, 
									smoke: req.body.smoke, 
									pre_existing_conditions: req.body.description, 
									ref_range_chol_max: max_chol, 
									ref_range_hdl_min: min_hdl, 
									ref_range_trig_min: min_trig, 
									ref_range_trig_max: max_trig,
									ref_range_ldl_max: max_ldl
								})
		  	new_user.save(function (err, newUser) {
		  		if(err)
		  		{
		  			console.log(err);
		  		}
		  		else
		  		{
		  			res.json(newUser)
		  		}
		  	})
		},
		loginUser: function(req, res){
			user.findOne({email: req.body.email}, function(err, loginUser){
				if(err)
				{
					console.log(err)
				}
				else
				{
					if(loginUser)
					{
						res.json(loginUser)
					}
					else
					{
						res.json({error: 'you are not a user'});
					}
				}
			})
		},
		addResultFLP: function(req, res){
			console.log(req.body.userID)
			user.findOne({_id: req.body.userID}, function(err, papa_user){
				var new_result = new resultFLP({ hdl: req.body.HDL, ldl: req.body.LDL, total_cholesterol: req.body.total_cholesterol, triglycerides: req.body.trig, _user: req.body.userID});
				new_result.save(function(err){
					if(err)
					{
						console.log(err);
					}
					else
					{
						papa_user.results_flp.push(new_result._id);
						papa_user.save(function(err){
							if(err)
							{
								console.log(err);
							}
							else
							{
								res.json(new_result);
							}
						})
					}
				})
			})
		},
		addResultCMP: function(req, res){
			console.log(req.body.userID);
			user.findOne({_id: req.body.userID}, function(err, papa_user){
				var new_result = new resultCMP({ albumin: req.body.albumin, alp: req.body.alp, alt: req.body.ast, ast: req.body.ast, bilirubin: req.body.bilirubin, bun: req.body.bun, calcium: req.body.calcium, carbon: req.body.carbon, chloride: req.body.chloride, creatinine: req.body.creatinine, glucose: req.body.glucose, potassium: req.body.potassium, sodium: req.body.sodium, total_protein: req.body.total_protein, _user: req.body.userID })
				new_result.save(function(err){
					if(err)
					{
						console.log(err);
					}
					else
					{
						papa_user.results_cmp.push(new_result._id);
						papa_user.save(function(err){
							if(err)
							{
								console.log(err);
							}
							else
							{
								res.json(new_result);
							}
						})
					}
				})
			})
		},
		get_latest_resultCMP: function(req, res){
			console.log(req.query.id);
		  	user.findOne({_id: req.query.id})
		  		.populate('results_cmp')
		  		.exec(function(err, full_userCMP){
			  		if(err)
			  		{
			  			console.log('couldnt do it bro')
			  		}
			  		else
			  		{
			  			console.log('found him homie');
			  			res.json(full_userCMP)
			  		}
		  		})
		},
		get_latest_resultFLP: function(req, res){
		  	user.findOne({_id: req.query.id})
		  		.populate('results_flp')
		  		.exec(function (err, full_userFLP){
			  		if(err)
			  		{
			  			console.log(err)
			  		}
			  		else
			  		{
			  			var newr = full_userFLP.toObject()

			  			for(var i = 0; i < full_userFLP.results_flp.length; i++)
						{
							newr.results_flp[i].chart_date = moment(full_userFLP.results_flp[i].chart_date).valueOf()
						}	
			  			// console.log(full_userFLP)
			  			res.json(newr)
			  		}
		  		})
		}			
    }
})();