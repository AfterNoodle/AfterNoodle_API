/**
 * Created by songmho on 2017. 8. 17..
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storeSchema = new Schema({
    id: Number,
    category: String,
    title: String,
    phoneNum : String,
    startTime : String,
    endTime : String,
    isDelivery : Boolean,
    address : String,
});

module.exports = mongoose.model('store', storeSchema);