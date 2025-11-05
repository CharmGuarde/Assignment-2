var express = require('express');
var router = express.Router();

/* HOME PAGE */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* ABOUT PAGE */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* PROJECTS PAGE */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* CONTACT PAGE */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
