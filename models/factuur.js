var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    klantnaam: {type: String, required: true},
    klantid: {type: String, required: true},
    status: {type: String, required: true},
    factuurid: {type: Number, required: true}
});

schema.plugin(mongooseUniqueValidator);
module.exports =  mongoose.model('Factuur', schema);
