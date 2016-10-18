# textUp
![header](https://raw.githubusercontent.com/keegandonley/textUp/master/TextUp.png?token=AMHMkw0_enl62L9qc48OEqWRFiBPMSr9ks5YDwsjwA%3D%3D)
This is a library for moving text between elements on an HTML page.

Something similar can be seen in action at www.keegandonley.com with the interactive text input.

### Initialize the display areas
#### textUp.define([*id1*, *id2*, ...])
The function can be passed an array of the id's of the HTML elements used in the display.

Example:
```javascript
textUp.define(['firstLevel', 'secondLevel', 'thirdLevel'])
```

### Add additional display areas
#### textUp.addElem(*id*)
The function can be passed an id of an HTML element to be added to the display stack

Example:
```javascript
// Can be called in conjunction with textUp.define()
textUp.define(['firstLevel', 'secondLevel', 'thirdLevel'])
textUp.addElem('fourthLevel')

// Can be called by itself to add the first element
textUp.addElem('firstLevel')
```

### Add text to the display
#### textUp.prepend(*string*)
The function takes a string and adds it to the bottom layer of the display, moving the upper levels on step up

Example:
```javascript
textUp.prepend("This")
textUp.prepend("is")
textUp.prepend("adding")
textUp.prepend("text")
```

#### textUp.prependOne(*string*)
The function takes a string and adds it to the beginning of the existing bottom layer of the display, leaving upper levels untouched

Example:
```javascript
textUp.prepend("solutions")
textUp.prependOne("Simple ")
// Result: "Simple Solutions"
```

#### textUp.appendOne(*string*)
The function takes a string and adds it to the end of the existing bottom layer of the display, leaving upper levels untouched

Example:
```javascript
textUp.prepend("solutions")
textUp.appendOne(", Simple")
// Result: "solutions, Simple"
```

#### textUp.replaceOne(*string*)
The function takes a string and replaces the existing bottom layer of the display, leaving upper levels untouched

Example:
```javascript
textUp.prepend("solutions")
textUp.replaceOne("Simple")
// Result: "Simple"
```

### Manipulating the display
#### textUp.bump()
Moves everything up in the display by one level and puts a blank line at the bottom level

Example:
```javascript
textUp.bump()
```

### Miscellaneous
#### textUp.getElems()
Returns an array of objects indicating the id names of each element that is active as part of the display

Example:
```javascript
var elements = textUp.getElems();
```

## Typical Use

index.html
```html
<html>
  <head>
    <script src="textup.js"></script>
  </head>
  <body>
    <div id="five"></div>
    <div id="four"></div>
    <div id="three"></div>
    <div id="two"></div>
    <div id="one"></div>
  </body>
</html>
```
site.js
```javascript
textUp.define(['one', 'two', 'three', 'four', 'five'])
// Process user input and store in var input
textUp.prepend(input)
// Process user input and store in var input
textUp.prepend(input)
// Determine output based on user input and store in var result
textUp.bump()
textUp.prepend(result)
```
