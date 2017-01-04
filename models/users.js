var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
	id:{
		type:Number,
		required:true
	},
	persoon_naam:{
		type:String,
		required:true
	},
	job_omschrijving:{
		type:String,
		required:true
	},
	create_date:{
		type:Date,
		default:Date.now
	},
	inCheck:{
		type:Date,
		default:Date.now
	},
	outCheck:{
		type:Date,
		default:Date.now
	}

});


var Users = mongoose.model('user', usersSchema);

module.exports = {
    addUsers: function(aanwezig, callback) { //post
        Users.create(aanwezig, callback);
    },

    allUsers: function(callback) {
        Users.find(callback);
    },

    findUsers: function(id, callback) {
        Users.find({
            id: id
        }, callback);
    },
    updateUsersOmschrijving: function(id, omschrijving , callback){
    	var query= {id: id};
    	var update = {
    		job_omschrijving: id.omschrijving
    	}
    	Users.findOneAndUpdate({naam_drone:id},omschrijving,callback); //update
    }
   
};