/**
 * Created by songmho on 2017. 8. 29..
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var livingSchema = new Schema({
    id : {
        type : Number,
        require: true,
        unique : true},
    title : {
        type : String,
        require : true},
    category : {
        type : String,
        require : true,},
    rate : {
        type : Number,
        require : true},
    detail : {
            type : String},
    userId : {
        type : String,
        require : true},
})

module.exports = mongoose.model('living', livingSchema);