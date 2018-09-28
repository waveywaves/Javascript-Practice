var https = require("https");
var options = {
    host:"en.wikipedia.org",
    port:443,
    path: "/wiki/Main_Page",
    method: "GET"
}

https.get(options,function(res){
    res.setEncoding("UTF-8");
    res.on("data",function(data){
        console.log(data);
    });
    res.on("end",function(){
        console.log("Done with getting the response from the site");
    });
});

