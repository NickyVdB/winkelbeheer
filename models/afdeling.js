var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    naam: {type: String, required: true},
    beschrijving: {type: String, required: false},
    verantwoordelijke: {type: Schema.Types.Mixed, ref: 'Werknemer' , required:false}
});

module.exports =  mongoose.model('Afdeling', schema);
