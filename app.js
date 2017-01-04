var express = require ('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//aanmaken van een webserver
var app = express();

//aanmaken datastore
var dalLocatie=require('./models/drone.js');
var validationlocaties=('./models/validateDrone.js');

//middleware, init bodyparser
app.use(bodyParser.json());

//connect to mongoose
mongoose.connect('mongodb://localhost/prober');
var db = mongoose.connection;

app.get('/',function(req,res){
	res.send('please use /location');
});
 

//listDrones
app.get('/location',function(req,res){
	dalLocatie.allDrones(function(err,locatie){
		if(err){
			throw err;
		}
		res.send(locatie);
	});
});
app.get('/location/:id',function(req,res){
	dalLocatie.findDrones(req.params.id, function(err,location){
		if(err){
			throw err;
		}
		res.send(location);
	});
});
//Post op drones
app.post('/location',function(req,res){
	var locatie = req.body; //bodyparser, allow us acces trough the form
    var errors = validationlocaties.fieldsNotEmpty(locatie, "naam_drone", "mac_address_drone", "naam_locatie", "beschrijving");
	if (errors) {
        res.status(400).send({
            msg: "Volgende velden zijn verplicht of fout: " + errors.concat()
        });
        return;
    }
	dalLocatie.addDrones(location,function(err,location){
		if(err){
			throw err;
		}
		res.send(location);
	});
});



app.listen(3030);
console.log("Server running on 3030");