var express = require('express');
var router = express.Router();
var store = require('../models/store');
var menu = require('../models/menu');
var storeFav = require('../models/storeFav');
var living = require('../models/living');
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

router.get('/searchList', function (req, res) {
    console.log(req.query.category);
    store.find({ "category" : req.query.category }, function(err, store) {
        if(err)   return res.status(500).send(err);
        if(!store) return res.status(404).send({ err: "store not found" });

        res.render('searchList', {
            category : req.query.category,
            store : store
        });

    });

});

router.get('/detail', function (req, res, next) {
    console.log('storeId = ' + req.query.storeId);

    menu.find({ "storeId" : req.query.storeId }, function(err, store) {
        if(err)   return res.status(500).send(err);
        if(!store) return res.status(404).send({ err: "menus not found" });
        console.log(store);

        res.render('detail', {
            store : store
        });
    });
});

//create store data
router.post('/api/store', function(req, res){
    store.create(req.body,function (err, stores) {
        if(err) return res.status(500).send(err);
        res.send(JSON.stringify(stores));
    })
});

//get all store
router.get('/api/store', function (req, res) {
    store.find({}, function (err, stores) {
        if(err)           return res.status(500).send(err);
        if(!stores.length) return res.status(404).send({ err: "stores not found" });
        res.send(JSON.stringify(stores));
    })
})

//get a store from store category
router.get("/api/store/:category", function(req, res) {
    store.find({ "category" : req.params.category }, function(err, store) {
        if(err)   return res.status(500).send(err);
        if(!store) return res.status(404).send({ err: "store not found" });
        res.send(JSON.stringify(store));
    });
});


//get a store from store title
router.get("/api/store/:title", function(req, res) {
    store.findOne({ "title" : req.params.title }, function(err, store) {
        if(err)   return res.status(500).send(err);
        if(!store) return res.status(404).send({ err: "store not found" });
        res.send(JSON.stringify(store));
    });
});

//find by id and update
router.put("/api/store/:id", function(req, res) {
    store.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, store) {
        if(err) return res.status(500).send(err);
        res.send(JSON.stringify(store));
    });
});


//create store data
router.post('/api/menu', function(req, res){
    menu.create(req.body,function (err, menus) {
        if(err) return res.status(500).send(err);
        res.send(JSON.stringify(menus));
    })
});


//get a store from store category
router.get("/api/menu/:storeId", function(req, res) {
    menu.find({ "storeId" : req.params.storeId }, function(err, menu) {
        if(err)   return res.status(500).send(err);
        if(!menu) return res.status(404).send({ err: "menus not found" });
        res.send(JSON.stringify(menu));
    });
});

/**
 *  get favorite store
 */
router.get("/api/storeFav/:userId", function (req, res) {
    storeFav.find({"userId": req.params.userId},function (err, storeFavs) {
        if(err)   return res.status(500).send(err);
        if(!storeFavs) return res.status(404).send({ err: "storeFavs not found" });
        res.send(JSON.stringify(storeFavs));
    });

})

/**
 * add favorite store
 */
router.post('/api/storeFav/', function(req, res){
    storeFav.create(req.body,function (err, storeFavs) {
        if(err) return res.status(500).send(err);
        if(!storeFavs) return res.status(404).send({ err: "storeFavs not found" });
        res.send(JSON.stringify(storeFavs));
    })
});

/**
 * remove favorite store
 */
router.get('/api/storeFav/:userId/:storeId', function(req, res){
    console.log(req.params.userId+"    "+req.params.storeId);
    storeFav.remove({"userId": req.params.userId, "storeId":req.params.storeId},function (err, storeFavs) {
        console.log("Asdfasdf");
        console.log(req.params.userId+"    "+req.params.storeId);
        if(err) return res.status(500).send(err);
        if(!storeFavs) return res.status(404).send({ err: "storeFavs not found" });
        res.send(JSON.stringify(storeFavs));
    })
});

/**
 * create living post
 */
router.post('/api/living',function (req, res) {
    living.create(req.body,function (err, livings) {
        if(err) return res.status(500).send(err);
        if(!livings) return res.status(404).send({ err: "livings not created" });
        res.send(JSON.stringify(livings));
    })
});

/**
 * remove living post
 */
router.post('/api/living/:userId/:id',function (req, res) {
    living.remove({'id':req.params.id,'userId':req.params.userId},function (err, livings) {
        if(err) return res.status(500).send(err);
        if(!livings) return res.status(404).send({ err: "livings not found" });
        res.send(JSON.stringify(livings));
    })
});

/**
 * find a living post in a category
 */
router.get('/api/living/:category/:id',function (req, res) {
    living.find({':category':req.params.category,'id':req.params.id},function (err, livings) {
        if(err) return res.status(500).send(err);
        if(!livings) return res.status(404).send({ err: "livings not found" });
        res.send(JSON.stringify(livings));
    })
});

/**
 * find lists of living post in a category
 */
router.get('/api/living/:category',function (req, res) {
    living.find({':category':req.params.category},function (err, livings) {
        if(err) return res.status(500).send(err);
        if(!livings) return res.status(404).send({ err: "livings not found" });
        res.send(JSON.stringify(livings));
    })
});
