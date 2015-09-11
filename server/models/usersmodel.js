var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');
var userSchema = new mongoose.Schema({
	user_name: String, 
	email: String, 
	password: String, 
	bloodtype: String, 
	city: String, 
	age: Number, 
	state: String,
	sex: String,
	smoke: String,
	pre_existing_conditions: String,
	created_at: {type: Date, default: moment()},
	results_flp: [{ type:Schema.ObjectId, ref: "FLP_result"}],
	results_cmp: [{ type:Schema.ObjectId, ref: "CMP_result"}],
	ref_range_chol_max: Number, 
	ref_range_hdl_min: Number,
	ref_range_hdl_max: Number, 
	ref_range_ldl_max: Number, 
	ref_range_trig_min: Number, 
	ref_range_trig_max: Number
})
module.exports = mongoose.model('user', userSchema);