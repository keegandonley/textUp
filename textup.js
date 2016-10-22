(function(window){
    'use strict';
    function define_textUp(){
        var textUp = {};
		var displayElems = [];
		var numElements = 0;
		// Set to true to enable logging
		var isDebug = false;
		var error = console.error;

		function ismovable (element) {
			return element.sticky;
		}

		function getElem (element) {
			debug(element);
			return document.getElementById(element.id);
		}

		function checkElem() {
			if (numElements > 0) {
				return numElements;
			} else {
				error("No elements have been defined");
				return false;
			}
		}

		function checkElemExist(e) {
			return document.getElementById(e)
		}

		function debug(msg) {
			if (isDebug) {
				console.log(msg);
			}
		}

		/*
		@param: elements - array of strings indicating the html ID
							of elements for the display
		*/
		textUp.define = function(elements){
			elements.forEach(function (element) {
				if (checkElemExist(element)) {
					numElements++;
					displayElems.push({
						id: element,
						sticky: false
					})
				} else {
					error("Element " + element + " does not exist" );
				}

			})
		}

		/*
		@param: element - string indicating the html ID
							of new element for the display
		*/
		textUp.addElem = function(element){
			if (checkElemExist(element)) {
				numElements++;
				displayElems.push({
					id: element,
					sticky: false
				})
			} else {
				error("Element " + element + " does not exist" );
			}
		}

		textUp.bump = function(){
			textUp.prepend("  ");
		}

		textUp.prepend = function(inputLine){
			if (checkElem()) {
				if (checkElem() < 2) {
					debug(numElements + " elements exist in memory");
					getElem(displayElems[0]).innerHTML = inputLine;
				} else {
					debug(numElements + " elements exist in memory");
					var i = numElements - 1;
					while (i > 0) {
						if (debug){console.log(i)}
						getElem(displayElems[i]).innerHTML = getElem(displayElems[i-1]).innerHTML;
						i--;
					}
					getElem(displayElems[0]).innerHTML = inputLine;
				}
			}
		}

		textUp.appendOne = function(inputLine) {
			if (checkElem()) {
				var tempText = getElem(displayElems[0]).innerHTML + inputLine;
				getElem(displayElems[0]).innerHTML = tempText;
			}
		}

		textUp.prependOne = function(inputLine) {
			if (checkElem()) {
				var tempText = inputLine + getElem(displayElems[0]).innerHTML;
				getElem(displayElems[0]).innerHTML = tempText;
			}
		}

		textUp.replaceOne = function(inputLine) {
			if (checkElem()) {
				getElem(displayElems[0]).innerHTML = inputLine;
			}
		}

		textUp.getElems = function() {
			return displayElems;
		}

        return textUp;
    }
    if(typeof(textUp) === 'undefined'){
        window.textUp = define_textUp();
    }
    else{
        console.log("TextUp is already defined.");
    }
})(window);
