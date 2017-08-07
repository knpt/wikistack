var morgan = require('morgan');
var express = require('express');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var models = require('./models');
var routes = require('./routes');
var app = express();

// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', routes);

models.db.sync({force:true})
.then(function() {
    app.listen(3000, function() {
        console.log('Server is listening on port 3000!');
    });
});



app.use(morgan('dev'));