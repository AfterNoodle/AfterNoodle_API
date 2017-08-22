/**
 * Created by songmho on 2017. 8. 17..
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storeSchema = new Schema({
    id:{
        type : Number,
        require: true,
        unique : true },
    category: String,
    title: {
        type : String,
        index : true
    },
    phoneNum : String,
    startTime : String,
    endTime : String,
    isDelivery : Boolean,
    address : String,
});

module.exports = mongoose.model('store', storeSchema);