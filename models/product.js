var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    naam: {type: String, required: true},
    code: {type: String, required: true},
    beschrijving: {type: String, required: false},
    prijs: {type: Number, required: true},
    leverancier: {type: Schema.Types.Mixed, ref: 'Leverancier' , required:false},
    afdeling: {type: Schema.Types.Mixed, ref: 'Afdeling' , required:false}
});

module.exports =  mongoose.model('Product', schema);
