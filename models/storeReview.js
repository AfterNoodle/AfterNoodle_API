/**
 * Created by songmho on 2017. 8. 29..
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storeReviewSchema = new Schema({
    userId : {
        type : String,
        require : true},
    storeId : {
        type : Number,
        require : true},
})

module.exports = mongoose.model('storeReview', storeReviewSchema);