const express = require('express');
const router = express.Router();
//router = require('express').Router();


router.get('/', function(req, res, next) {
  //res.send('got to GET /wiki/');
  res.redirect('/')
});
//router.get('/') refers to /wiki because we mounted our router at the /wiki path, but res.render or res.redirect('/') refers to the root 


router.post('/', function(req, res, next) {
  res.send('got to POST /wiki/');
});

router.get('/add', function(req, res, next) {
  //res.send('got to GET /wiki/add');
  res.render('addpage');
});





module.exports = router;