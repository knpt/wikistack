var morgan = require('morgan');
var express = require('express');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');

var app = express();

// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment 
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);

// start the server
var server = app.listen(1337, function(){
    console.log("listening");
});

app.get('/', function(req, res, next){
    res.render('index')
})

