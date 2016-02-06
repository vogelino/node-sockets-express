var http = require('http');
var routes = require('./routes');

var server = http.createServer(function(request, response) {
	switch(request.url) {
		case '/':
			routes.root.apply(routes.root, arguments);
			break;
		case '/goodbye':
			if (request.method === 'POST') {
				routes.postGoodbye.apply(routes.postGoodbye, arguments);
			} else {
				routes.getGoodbye.apply(routes.goodbye, arguments);
			}
			break;
		default:
			routes.notFound.apply(routes.notFound, arguments);
			break;
	}
});

server.listen(3000);
