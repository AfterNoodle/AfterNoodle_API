var express = require('express');
var router = express.Router();

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

router.get('/api/store',function (req, res) {
    res.end();
});

