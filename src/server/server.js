var express = require('express');
var routes = require('./routes');
var app = express();

var express = require('express');
var app = express();

app.get('/', routes.root);
app.post('/goodbye', routes.postGoodbye);
app.get('/goodbye', routes.getGoodbye);
app.get('/*', routes.notFound);


app.listen(3000);
