var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index');
});

var server = app.listen(4812, function() {
	console.log('Express server listening on port ' + server.address().port);
});
