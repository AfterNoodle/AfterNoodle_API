/**
 * Created by songmho on 2017. 8. 29..
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storeFavSchema = new Schema({
    userId : {
        type : String,
        require : true},
    storeId : {
        type : Number,
        require : true},
    title: {
        type : String,
        index : true
    },
})

module.exports = mongoose.model('storeFav', storeFavSchema);