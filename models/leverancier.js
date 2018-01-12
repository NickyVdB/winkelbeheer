var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    naam: {type: String, required: true},
    telefoon: {type: String, required: true},
    locatie: {type: String, required: true},
    rekeningnr: {type: String, required: true},
    status: {type: String, required: true}
});
schema.plugin(mongooseUniqueValidator);
module.exports =  mongoose.model('Leverancier', schema);