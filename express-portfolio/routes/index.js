/*
var express = require('express');
var router = express.Router();

GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/

var express = require('express');
var router = express.Router();

/* Home */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* About */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* Projects */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* Contact */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;