var http = require('http');
var routes = require('./routes');

var server = http.createServer(function(request, response) {
	switch(request.url) {
		case '/':
			routes.root(response);
			break;
		case '/goodbye':
			routes.goodbye(response);
			break;
		default:
			routes.notFound(response);
			break;
	}
});

server.listen(3000);
