var mongoose = require('mongoose');

//Drone Schema
//voor de applicatie
var droneSchema = mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	id:({
		type:Number,
		required:true
	})
})