var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, res) { 



	fs.readFile(__dirname + '/data.txt', function (err, data) {
	  	

	  	if (err) {
	  		res.writeHead(200, {'Content-Type': 'text/html'});
			console.log(data);
	  	}
	  	else {
	  		res.end(data);
	  	}

	});


}).listen(1337, '127.0.0.1');


console.log('Server running at http://127.0.0.1:1337/');