module.exports = {
	root: function(response) {
		response.writeHead(200, { "Content-Type": "text/html" });
		response.end('Hello <strong>World</strong>!');
	},
	goodbye: function(response) {
		response.writeHead(200, { "Content-Type": "text/html" });
		response.end('Goodbye <strong>World</strong>!');
	},
	notFound: function(response) {
		response.writeHead(404, { "Content-Type": "text/html" });
		response.end('Page <strong>not found</strong>! Sorry about that…');
	}
};
