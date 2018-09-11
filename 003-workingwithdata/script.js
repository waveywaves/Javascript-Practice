/**
 * Data types used in javascript are as follows.
 * Numeric, String , Boolean, null, undefined, Symbol
 */

var number = 2;
var str = "asdasdasdasdada";
var isAwesome = true;
var emptyInside = null;
var variable;

// We are now loggin the data to the console to see how it is represented in the browser.

console.log(number);
console.log(str);
console.log(isAwesome);
console.log(emptyInside);
console.log(variable);

// Math operations are done in the same way as donw in any other language.

var a = 5;
var b = 19;
var c = 72;

a += b/c;
b *= a;

console.log(" The arithmatic operations done result in "+ b);

// Let's look at arrays.
/**
 * In javascript arrays are a javascript object and 
 * can be written in two different notations as below.
 */

 var array1 = [
     "Red",
     "Blue",
     "Green"
 ]

 var array2 = new Array("red","blue","green");

// Let's play around witht the functions for arrays.

 console.log(array1);
 array1.reverse();
 array1.push("new");
 array1.pop();
 array1.splice(2,1);
 console.log(array1);

 var newArray = array1.slice();
 console.log(newArray);

 console.log(array2);
 var result = array2.indexOf("Red",1);
 console.log(array2.join(" , "));