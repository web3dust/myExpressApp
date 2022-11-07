var express = require('express');
var router = express.Router();
var content = require('../src/content');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: content.getTitle });
});

module.exports = router;
