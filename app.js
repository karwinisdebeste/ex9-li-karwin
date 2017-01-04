var express = require ('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express ();

//aanmaken datastore

var LocatieSchema=require('./models/location.js');



//connect to mongoose
mongoose.connect('mongodb://localhost:27017/prober');
var db = mongoose.connection;

app.get('/',function(req,res){
	res.send('please use prober/drones');
});

app.get('/locatie',function(req,res){
	LocatieSchema.getLocation(function(err,location){
		if(err){
			throw err;
		}
		res.send(location);
	});
});

app.listen(3030);
console.log("Server running on 3030");