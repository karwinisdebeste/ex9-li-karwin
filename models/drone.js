var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Drone Schema
//voor de applicatie
var droneSchema = new Schema({
    naam_drone: {
        type: String,
        required: true,
        unique: true
    },
    mac_address_drone: {
        type: String,
        required: true,
        unique: true
    },
    naam_locatie: {
        type: String,
        required: true,
        unique: true
    },
    beschrijving: {
        type: String,
        required: true
    }
    
}); // eigen collection toevoegen
//models name = collection name

//var testDrone = new Drone({name:"test1",id:999,location:"nergens"});
//testDrone.save();
//get location

// exports making it accessable from outside
var Drone = module.exports = mongoose.model('locatie', droneSchema);
module.exports = {
    addDrones: function (locatie, callback) {
        Drone.create(locatie, callback); //create -> POST
    },

    allDrones : function(callback) {
        Drone.find(callback);
    },

    findDrones : function(id, callback){
        Drone.find({naam_drone:id}, callback);
    },
    updateDrones: function (id, locatie, callback) {
        Drone.findOneAndUpdate({naam_drone:id}, locatie , callback); //update = PUT
    }
};