var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '', menu: 'home' });
});

router.get('/membership', function(req, res, next) {
	res.render('membership', { title : '| MEMBERSHIP', menu: 'membership'});
});

router.get('/faq', function(req, res, next) {
	res.render('faq', { title : '| FAQS', menu: 'faq'});
});

router.get('/event', function(req, res, next) {
	res.render('event', { title : '| EVENTS', menu: 'event'});
});

router.get('/contact', function(req, res, next) {
	res.render('contact', { title : '| CONTACT', menu: 'contact'});
});

module.exports = router;
