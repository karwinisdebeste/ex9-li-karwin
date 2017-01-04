var mongoose = require('mongoose');

//Drone Schema
//voor de applicatie
var LocatieSchema = mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	_id:({
		type:Number,
		required:true
	}),
	location:({
		type:String,
		required:true
	}),
	mac_address:
	({
		type:String,
		required:true
	})	
});

var LocatieSchema = module.exports = mongoose.model('location',LocatieSchema); // exports making it accessable from outside

//get location
module.exports = {
	 //callback via de route file
	getLocation : function(callback){
	drones.find(callback);
	}
};
