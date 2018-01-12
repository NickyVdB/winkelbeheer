var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    naam: {type: String, required: true},
    datum: {type: String, required: true},
    status: {type: String, required: false},
    totaalprijs: {type: Number, required: true},
    leverancier: {type: Schema.Types.Mixed, ref: 'Leverancier' , required:false},
    verantwoordelijke: {type: Schema.Types.Mixed, ref: 'Werknemer' , required:false}
});

module.exports =  mongoose.model('Order', schema);
