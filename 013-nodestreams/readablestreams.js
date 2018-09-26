var fs = require("fs");
var stream = fs.createReadStream("./chat.log","UTF-8");

stream.once("data",function(){
    console.log("\n\n\n\n");
    console.log("Started reacing the Data");
    console.log("\n\n\n\n");
});

stream.on("data",function(chunk){
    console.log(`Read ${chunk.length} amount of data`);
});

stream.on("close",function(){
    console.log("\n\n\n\n");
    console.log("Finished Reading File");
    console.log("\n\n\n\n");
});
