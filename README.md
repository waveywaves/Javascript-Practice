# Javascript Practice

This repository will focus on learning Javascript.

## Progress

### 1> Hello World ! (from the in-browser console)

> Javascript is also known as the language of the web and we are going to stay true the same fact and start with understanding javascript from the browser.

> We need to open index.html in a browser which is a blank html file with blank head and body tags.

> Using the following we get an alert dialog box
```js
alert("I love ducks")
```
> The following allows us to create a Date object and store it to the date variable and we are logging it to the alert dialog.
```js
var date = Date()
alert("Today is "+date)
```
> We are doing the same below but instead of writing to the alert dialog box we are writing the output of the date variable to the console.
```js
console.log(date)
```
> Now if we have to make changes to the html, we have to dive into the Document Object Model and then edit the inner_html from there as follows.
```js
document.body.innerHTML = "<h1> H4ck3R420 "+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+" </h1>"
```
> This allows us to understand how Javascript is used as the language of the weba nd if we think about it, how we can also use it to power a simple html css page.

### 2> Hello World ! (Using a script written in a different file)

> We can add a javascript script in the html itself with the tags as follows.

```html
<script> 
document.body.innerHTML = "<h1> This is a revolution </h1>"
</script>
```
The above has to be added to the bottom or the script itself can be deferred or can be run asyncronously as follows so that the page can load first and then load the script or the running of the script can be thrown to the background so that the page can load without the script coming in between.

```html
<script defer> 
document.body.innerHTML = "<h1> This is a revolution </h1>"
</script>
<script asnc> 
document.body.innerHTML = "<h1> This is a revolution </h1>"
</script>
```

> Now after the above our main goal is to have ajavascript file run in the browser. We would have to do the following to run a javascript file in the browser.

```html
<script src="script.js" defer> </script>
```

The above script would execute the javascript file after the HTML and CSS loads completely.

### 3> Working with Data.

> In this part we will be looking at working with variables, constants, differnt types and data structures.

### 4> Functions

> There are three types of functions in javascript. Simple Functions, Anonymous functions, immediately invoked functional expressions.

> In this past we are going to look at what these functions look like and how to use these functions.

### 5> Objects

> All reference types in Javascript have been inherited from objects.

> An object in Javascript can be defined as follows.
```js
var obj = {
    key:"value",
    getval : function(){
        return obj.key
    }
}
``` 

> A constructor for the same object can be given as follows.
```js
function Person(name,age){
    this.name = name
    this.age = age
}

var vibhav = new Person("Vibhav",21)
var elvis = new Person("Elvis",0)

```

## Things to Cover
#### Closures [1](https://medium.com/dailyjs/how-i-automated-my-job-with-node-js-94bf4e423017)
#### DOM [1](https://medium.com/re-dom/master-the-dom-bc1a2a06089b)
#### Typescript+Babel [1](https://medium.com/dailyjs/typescript-babel-ce24f724398?source=collection_home---4------1---------------------)
#### React+socket.io [1](https://medium.com/dailyjs/combining-react-with-socket-io-for-real-time-goodness-d26168429a34)
#### XSS [1](https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0), [2](https://medium.com/@taylorotwell/js-frameworks-server-side-rendering-and-xss-722805009892), [3](https://medium.com/@marin_m/how-i-found-a-5-000-google-maps-xss-by-fiddling-with-protobuf-963ee0d9caff)