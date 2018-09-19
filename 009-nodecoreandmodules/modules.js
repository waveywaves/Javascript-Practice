// In-built Modules

var path = require("path");
var util = require("util");
var v8 = require("v8");
var readline = require("readline");

util.log(path.basename(__dirname));
util.log(path.join(__dirname,__filename));
util.log(v8.getHeapStatistics());

rl = readline.createInterface(process.stdin,process.stdout);
rl.question("Who are you ?",function(answer){
    util.log(`Oh hello, ${answer} !`);
});