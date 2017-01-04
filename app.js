var express = require ('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//aanmaken van een webserver
var app = express();

//aanmaken datastore
var dalLocatie=require('./models/drone.js');
var validationlocaties=('./models/validateDrone.js');
var dalAanwezigheden = require("./models/aanwStorage.js");
var aanwValidation = require("./models/aanwValidation.js");
var dalUsers=require('./models/users.js');
var usersValudation=require('./models/usersValidation.js');
//middleware, init bodyparser
app.use(bodyParser.json());

//connect to mongoose
mongoose.connect('mongodb://localhost/prober');
var db = mongoose.connection;

app.get('/',function(req,res){
	res.send('please use /location');
});
 

//list location
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
//Post op locatie
app.post('/location',function(req,res){
	var locatie = req.body; //bodyparser, allow us acces trough the form
    var errors = validationlocaties.checkvalues(locatie, "naam_drone", "mac_address_drone", "naam_locatie", "beschrijving");
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
app.put("/locaties/:id", function(req, res) {
    var locatie = req.body;
    var errors = validationlocaties.fieldsNotEmpty(locatie, "id", "naam_drone", "mac_address_drone", "naam_locatie", "beschrijving");
    if (errors) {
        res.status(400).send({
            msg: "Volgende velden zijn verplicht of fout: " + errors.concat()
        });
    } else {
        dalLocatie.updateDrones(req.params.id, locatie, function(err, location) {
            if (err) {
                throw err;
            } else {
                res.send(locatie);
            }
        });
    }
});
// aanwezigheden
app.get("/aanwezigheden", function(req, res) {
    dalAanwezigheden.allAanwezigheden(function(err, aanwezig) {
        if (err) {
            throw err;
        } else {
            res.send(aanwezig);
        }
    });
});

app.get("/aanwezigheden/:id", function(req, res) {
    dalAanwezigheden.findAanwezigheden(req.params.id, function(err, aanwezig) {
        if (err) {
            throw err;
        } else {
            res.send(aanwezig);
        }
    });
});

app.post("/aanwezigheden", function(req, res) {
    var aanwezig = req.body;
    var errors = aanwValidation.fieldsNotEmpty(aanwezig, "id", "naam_drone", "aantal", "naam_locatie", "uur");
    if (errors) {
        res.status(400).send({
            msg: "Volgende velden zijn verplicht of fout: " + errors.concat()
        });
        return;
    } else {
        dalAanwezigheden.saveAanwezigheden(aanwezig, function(err, aanwezig) {
            if (err) {
                throw err;
            } else {
                res.send(aanwezig);
            }
        });
    }
});
//users
app.get("/users", function(req, res) {
    dalAanwezigheden.allUsers(function(err, user) {
        if (err) {
            throw err;
        } else {
            res.send(user);
        }
    });
});
app.get("/users/:id", function(req, res) {
    dalUsers.findUsers(req.params.id, function(err, aanwezig) {
        if (err) {
            throw err;
        } else {
            res.send(aanwezig);
        }
    });
});
app.post("/users", function(req, res) {
    var user = req.body;
    var errors = usersValudation.fieldsNotEmpty(user, "id","persoon_naam","job_omschrijving");
    if (errors) {
        res.status(400).send({
            msg: "Volgende velden zijn verplicht of fout: " + errors.concat()
        });
        return;
    } else {
        dalUsers.addUsers(user, function(err, user) {
            if (err) {
                throw err;
            } else {
                res.send(user);
            }
        });
    }
});
app.put("/users/:id", function(req, res) {
    var user = req.body;
    var errors = usersValudation.fieldsNotEmpty(user, "id","persoon_naam","job_omschrijving");
    if (errors) {
        res.status(400).send({
            msg: "Volgende velden zijn verplicht of fout: " + errors.concat()
        });
    } else {
        dalLocatie.updateDrones(req.params.id, user, function(err, user) {
            if (err) {
                throw err;
            } else {
                res.send(user);
            }
        });
    }
});


app.listen(3030);
console.log("Server running on 3030");