var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    naam: {type: String, required: true},
    voornaam: {type: String, required: true},
    telefoon: {type: String, required: true, unique: true}
    //afdelingen:[{type:Schema.Types.ObjectId, ref: 'Afdeling'}]
});
schema.plugin(mongooseUniqueValidator);
module.exports =  mongoose.model('Werknemer', schema);