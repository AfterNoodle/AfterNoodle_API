/**
 * Created by songmho on 2017. 8. 17..
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storeSchema = new Schema({
    id: Number,
    title: String,
    phoneNum : String
});

module.exports = mongoose.model('store', storeSchema);