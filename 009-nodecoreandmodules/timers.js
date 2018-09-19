// Timer Functions and Tricks

var waitTime = 3000;
var currentTime = 0;
var waitInterval = 20;

function writeWaiting(t){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${t/1000} seconds have passed ..`);
}

var interval = setInterval(function(){
    currentTime += waitInterval;
    writeWaiting(currentTime);
}, waitInterval);

setTimeout(function(){
    clearInterval(interval);
    writeWaiting(waitTime);
    console.log("Patience OVER !");
}, waitTime);

