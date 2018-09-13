
var h = document.createElement("H1")                // Create a <h1> element
var t = document.createTextNode("Hello World");     // Create a text node
h.appendChild(t);
h.style.cssText = "padding: 1em; background-color:  red;";
//h.setAttribute('style',"height: 100em;")

document.body.appendChild(h)    // Append the text to <h1>
console.log(h)
