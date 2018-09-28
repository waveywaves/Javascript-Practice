var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
    console.log("Listening on PORT 5000");

    if (req.url === "/"){
        res.writeHead(200,"Content-Type","text/plain");
        var stream = fs.createReadStream("main.html");
        stream.pipe(res);
         
    } else {
        res.writeHead(404,"Content-Type","text/plain");
        res.end("404 not found");
    }
}).listen(5000);