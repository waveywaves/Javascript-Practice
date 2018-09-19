var events = require("events");
var util = require("util");

var emitter = events.EventEmitter;
var Person = function(name,mothertongue){
    this.name;
    this.mothertongue;
}

util.inherits(Person,emitter);

var Vibhav = new Person("Vibhav","Marathi");
Vibhav.on("speak",function(message, status){
    console.log(`${this.name} speaks ${this.mothertongue} for sure \n`);
    util.log(` Message passed : ${message} \n Status : ${status}`);
});

Vibhav.emit("speak", null, 200);