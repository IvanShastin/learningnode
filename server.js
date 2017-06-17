const http = require('http');
const fs = require('fs');

http.createServer((request, response)=> {
    var name = require('url').parse(request.url, true).query.name;

    if(name === undefined) name = 'world';

    if(name == 'burningbird') {
        const file = 'burningbird.png';
        fs.stat(file, (err, stat) => {
            if(err) {
                response.writeHead(200, {'content-type':'text/plain'});
                response.end("Burning bird is not available right now");
            } else {

                fs.readFile(file, (err, data) =>{
                    if(err) {
                        console.log(err);
                        response.writeHead(200, {'content-type':'text/plain'});
                        response.end("Burning bird is not available right now");
                    } else {
                        response.contentType = 'image/png';
                        response.contentLength = stat.size;
                        response.end(data, 'binary');
                    }
                });
            }
        })

    } else {
        response.writeHead(200, {'content-type':'text/plain'});
        response.end("Hello " + name);
    }
}).listen(5000);