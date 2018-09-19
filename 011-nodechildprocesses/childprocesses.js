var child_process = require("child_process");

child_process.exec("ls", function(err,stdout){
    console.log(stdout);
});

var spawned_process = child_process.spawn("ping",["localhost"]);

spawned_process.stdout.on("data", function(data){
    console.log(`${data}`);
}); // Listen on the data event

spawned_process.on("close",function(){
    console.log("Spawned Child Process has closed");
});// On the close Event

setTimeout(function(){
    spawned_process.emit("close");
    process.exit();
},3000);