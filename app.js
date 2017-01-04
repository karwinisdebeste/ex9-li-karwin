var express = require ('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//aanmaken van een webserver
var app = express();

//aanmaken datastore

var DroneSchema=require('./models/location.js');



//connect to mongoose
mongoose.connect('mongodb://localhost/prober');
var db = mongoose.connection;

app.get('/',function(req,res){
	res.send('please use /drone');
});

app.get('/drone',function(req,res){
	DroneSchema.getDrones(function(err,drones){
		if(err){
			throw err;
		}
		res.send(drones);
	});
});


app.listen(3030);
console.log("Server running on 3030");