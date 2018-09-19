
// Understanding Node Core and Modules
// Processes, StandardInput and Output

process.stdout.write("Please send some data our way :)\n");
var data = [];

process.stdin.on("data", function(d){

    data.push(d.toString().trim());
    process.stdout.write(`Collected Data : ${data} \n`);
    if (data.length >= 5){
        process.exit();
    }

});
 