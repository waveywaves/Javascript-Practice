

var h1 = document.createElement("H1");
var text = document.createTextNode("Whaaaaaaaaaaaaaaaaaaaaaaaa ?????");
var styleChange = false

function changeStyle(e){
    e.preventDefault()    
    if (styleChange){
        h1.style = "color: purple;"
    } else {
        h1.style = "color: blue;"
    }
    styleChange = !styleChange
}

//h1.onclick = changeStyle
h1.addEventListener("click", function(e){changeStyle(e,this)}, false);
h1.addEventListener("click", function(){console.log("Click has been clickedd")}, false);

h1.appendChild(text)
document.body.appendChild(h1)