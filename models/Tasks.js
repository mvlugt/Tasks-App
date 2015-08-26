var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
	task : String,
	complete : {type: Boolean, default: false},
	date : {type: Date, default: Date.now}	
});

module.exports = mongoose.model('tasks', taskSchema);