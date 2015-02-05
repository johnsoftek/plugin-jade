'use strict';

var connect = require('connect');
var serveStatic = require('serve-static');
var http = require('http');
var open = require('open');
var testfile;

var args = process.argv.slice(2);
if (args.length == 0) {
	testfile = 'test';
} else if (args.length == 1) {
	testfile = 'test-' + args[0];
} else {
	console.log('Usage npm test [<testfile>]');
	process.exit(1);
}

var app = connect();
app.use(serveStatic(process.cwd()));

var server = http.createServer(app);
server.listen(8080, function () {
	open('http://localhost:8080/' + testfile + '.html');
});
