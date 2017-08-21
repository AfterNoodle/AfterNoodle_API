var express = require('express');
var router = express.Router();
var store = require('../models/store')
var menu = require('../models/menu')

module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*using web*/
router.get('/main', function(req, res, next) {
    res.render('main');
});

router.get('/next', function (req, res, next) {
    res.render('next');
});

router.get('/searchList', function (req, res, next) {
    res.render('searchList', {
        category : req.query.category
    });
});

router.get('/detail', function (req, res, next) {
    res.render('detail');
});

//create store data
router.post('/api/store', function(req, res){
    store.create(req.body,function (err, stores) {
        if(err) return res.status(500).send(err);
        res.send("Store Create successfully:\n" + stores);
    })
});




//get all store
router.get('/api/store', function (req, res) {
    store.find({}, function (err, stores) {
        if(err)           return res.status(500).send(err);
        if(!stores.length) return res.status(404).send({ err: "User not found" });
        res.send("store find successfully:\n" + stores);
    })
})

//get a store from store category
router.get("/api/store/:category", function(req, res) {
    store.find({ "category" : req.params.category }, function(err, store) {
        if(err)   return res.status(500).send(err);
        if(!store) return res.status(404).send({ err: "store not found" });
        res.send("stores in the category find successfully:\n" + store);
    });
});


//get a store from store title
router.get("/api/store/:title", function(req, res) {
    store.findOne({ "title" : req.params.title }, function(err, store) {
        if(err)   return res.status(500).send(err);
        if(!store) return res.status(404).send({ err: "store not found" });
        res.send("store findOne successfully:\n" + store);
    });
});

//find by id and update
router.put("/api/store/:id", function(req, res) {
    store.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, store) {
        if(err) return res.status(500).send(err);
        res.send("store findByIdAndUpdate successfully:\n" + store);
    });
});


//create store data
router.post('/api/menu', function(req, res){
    menu.create(req.body,function (err, menus) {
        if(err) return res.status(500).send(err);
        res.send("menus Create successfully:\n" + menus);
    })
});


//get a store from store category
router.get("/api/menu/:storeId", function(req, res) {
    store.find({ "menu" : req.params.storeId }, function(err, store) {
        if(err)   return res.status(500).send(err);
        if(!store) return res.status(404).send({ err: "menus not found" });
        res.send("menus in the store find successfully:\n" + store);
    });
});



