/**
 * Created by songmho on 2017. 8. 17..
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var menuSchema = new Schema({
    id : Number,
    name : String,
    price : Number,
    storeId : Number,
})

module.exports = mongoose.model('menu', menuSchema);