var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');
var CMPSchema = new mongoose.Schema({
	albumin: Number, 
	alp: Number,
	alt: Number,
	ast: Number,
	bilirubin: Number, 
	bun: Number,
	calcium: Number,
	carbon: Number,
	chloride: Number, 
	creatinine: Number,
	glucose: Number,
	potassium: Number,
	sodium: Number,
	total_protein: Number,
	created_at: {type: Date, default: new Date("YYYY,MM,DD")},
	chart_date: {type: Date, default: moment().valueOf()},
	_user: { type:Schema.ObjectId, ref: "user" }
})
module.exports = mongoose.model('CMP_result', CMPSchema);