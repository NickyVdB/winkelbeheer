var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    naam: {type: String, required: true},
    beschrijving: {type: String, required: false},
    kortingsprocent: {type: Number, required: false},
    begindatum: {type: String, required: false},
    einddatum: {type: String, required: false},
    afdeling: {type: Schema.Types.Mixed, ref: 'Afdeling' , required:false}
});

module.exports =  mongoose.model('Promotie', schema);
