/**
 * Created by songmho on 2017. 8. 17..
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var menuSchema = new Schema({
    name : {
        type : String,
        require : true},
    price : Number,
    storeId : {
        type : Number,
        require : true},
})

module.exports = mongoose.model('menu', menuSchema);