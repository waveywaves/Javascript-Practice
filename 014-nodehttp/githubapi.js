var https = require("https");

var options = {
    hostname: "github.com",
    method: "GET",
    path: "/nodejs/node/issues",
    port: 443
}

https.get(options,function(res){
    res.setEncoding("UTF-8");
    console.log(res);
})