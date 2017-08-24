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

var database = mongoose.connection;
var store = database.collection('/api/store/:category');

var storeListByCategory = function (res, req) {
    store.find({ "category" : req.query.category }, function(err, store) {
        console.log(req.query.category);
        if(err)   return res.status(500).send(err);
        if(!store) return res.status(404).send({ err: "store not found" });
        return store;
    });
}

module.exports = mongoose.model('store', storeSchema);
module.exports.getStoreListByCategory = storeListByCategory;