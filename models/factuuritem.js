var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    factuurid: {type: Number, required: true},
    beschrijving:{type: String, required: true},
    prijs: {type: Number, required: true}
});

module.exports =  mongoose.model('FactuurItem', schema);
