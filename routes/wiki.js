const express = require('express');
const router = express.Router();
//router = require('express').Router();

var models = require('../models');
var Page = models.Page;
var User = models.User;

router.get('/', function(req, res, next) {
  //res.send('got to GET /wiki/');
  res.redirect('/');
});
//router.get('/') refers to /wiki because we mounted our router at the /wiki path, but res.render or res.redirect('/') refers to the root

router.post('/', function(req, res, next) {
  var page = Page.build({
    title: req.body.title,
    content: req.body.content,
    status: req.body.status
  });

  page.save()
  .then(function() {
//    res.redirect('/');
    res.json(page);
  });
});

router.get('/add', function(req, res, next) {
  //res.send('got to GET /wiki/add');
  res.render('addpage');
});

router.get('/:urlTitle', function(req, res, next){
  
  res.json(Page.findAll({
    where: {
      urlTitle: req.params.urlTitle
    }
  }));
});






module.exports = router;
