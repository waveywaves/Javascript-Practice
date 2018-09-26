var fs = require("fs");
var data;
fs.readdir("./",function(err,d){
    console.log(d);
});

console.log(fs.readFileSync("./text.txt"));
fs.readFile("./text.txt","UTF-8",function(err,contents){
    console.log(contents)
});

