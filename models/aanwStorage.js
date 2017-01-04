var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var aanwSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    naam_drone: {
        type: String,
        required: true,
    },
    aantal: {
        type: Number,
        required: true,
    },
    naam_locatie: {
        type: String,
        required: true
    },
    uur: {
        type: String,
        timestamp: true,
        required: true
    }
}, {
    collection: "Aanwezigheden"
});
var Aanwezigheden = mongoose.model('Aanwezigheden', aanwSchema);

module.exports = {
    saveAanwezigheden: function(aanwezig, callback) {
        Aanwezigheden.create(aanwezig, callback);
    },

    allAanwezigheden: function(callback) {
        Aanwezigheden.find(callback);
    },

    findAanwezigheden: function(id, callback) {
        Aanwezigheden.find({
            id: id
        }, callback);
    }
};