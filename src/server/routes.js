module.exports = {
	root: function(request, response) {
		response.writeHead(200, { "Content-Type": "text/html" });
		response.end('Hello <strong>World</strong>!');
	},
	getGoodbye: function(request, response) {
		response.writeHead(200, { "Content-Type": "text/html" });
		response.end('Goodbye. <strong>Give me a hug</strong>!');
	},
	postGoodbye: function(request, response) {
		response.writeHead(200, { "Content-Type": "text/html" });
		response.end('Goodbye. <strong>Here, a kiss for you</strong>!');
	},
	notFound: function(request, response) {
		response.writeHead(404, { "Content-Type": "text/html" });
		response.end('Page <strong>not found</strong>! Sorry about that…');
	}
};
