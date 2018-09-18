var path = require("path") // Importing Modules

var hello = "Hello World !";
var d = hello.slice(10) // Get the D

console.log(`${d} evil`); // Print with string formatting
console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename)); // Get the name of the file using path

console.log(process.argv) //Checking process arguments

function grab(flag) {
    var indexValue = process.argv.indexOf(flag);
    return (indexValue === -1) ? null : process.argv[indexValue+1] 
}

var grabstrings = [
    "Grabb !",
    "Grabber !",
    "Grabbest !"
]

process.stdout.write(`${grabstrings} ${grab("--grabber")}`);