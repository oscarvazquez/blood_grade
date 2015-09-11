var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');
var FLPSchema = new mongoose.Schema({
	hdl: Number, 
	ldl: Number,
	total_cholesterol: Number,
	triglycerides: Number,
	created_at: {type: Date, default: moment()},
	chart_date: {type: Date, default: moment().valueOf()},
	_user: { type:Schema.ObjectId, ref: "user"}

})
module.exports = mongoose.model('FLP_result', FLPSchema);