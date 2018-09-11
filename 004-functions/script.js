// First let's write some simple functions.

function multiply(a,b){
    return a*b;
}

// Now let's write anonymous functions

var divide = function(a,b){
    return a/b;
}

 function multiply(a,b){
     return a*b;
 } // Normal Functions

 var divide = function(a,b){
     return a/b;
 } // Anonymous functions

 result = (function(a,b){
    multiplied = multiply(a,b);
    divided = divide(a,b)
    return multiplied+divided
 })(6/17,8/9) // Functions which are invoked and run as the script runs
 console.log(result)