(function(window){
    'use strict';
    function define_textUp(){
        var textUp = {};

		// Private elements
		var displayElems = [];
		var numElements = 0;
		var debug = false;

		function ismovable (element) {
			return element.sticky;
		}

		function getElem (element) {
			if (debug){console.log(element)}
			return document.getElementById(element.id);
		}


		/*
		@param: elements - array of strings indicating the html ID
							of elements for the display
		*/
		textUp.define = function(elements){
			elements.forEach(function (element) {
				numElements++;
				displayElems.push({
					id: element,
					sticky: false
				})
			})
		}

		/*
		@param: element - string indicating the html ID
							of new element for the display
		*/
		textUp.addElem = function(element){
			numElements++;
			displayElems.push({
				id: element,
				sticky: false
			})
		}

		textUp.bump = function(){
			textUp.prepend("");
		}

		textUp.prepend = function(inputLine){
			if (numElements > 0) {
				if (numElements < 2) {
					if (debug){console.log(numElements + " elements exist in memory")}
					// Need to reference html object
					document.getElementById(displayElems[0].id).innerHTML = inputLine;
				} else {
					if (debug){console.log(numElements + " elements exist in memory")}
					var i = numElements - 1;
					while (i > 0) {
						if (debug){console.log(i)}
						getElem(displayElems[i]).innerHTML = getElem(displayElems[i-1]).innerHTML;
						i--;
					}
					getElem(displayElems[0]).innerHTML = inputLine;
				}
			} else {
				console.error("No elements have been defined");
			}
		}

		textUp.appendOne = function(inputLine) {
			if (numElements > 0) {
				var tempText = getElem(displayElems[0]).innerHTML + inputLine;
				getElem(displayElems[0]).innerHTML = tempText;
			} else {
				console.error("No elements have been defined");
			}
		}

		textUp.prependOne = function(inputLine) {
			if (numElements > 0) {
				var tempText = inputLine + getElem(displayElems[0]).innerHTML;
				getElem(displayElems[0]).innerHTML = tempText;
			} else {
				console.error("No elements have been defined");
			}
		}

		textUp.replaceOne = function(inputLine) {
			if (numElements > 0) {
				getElem(displayElems[0]).innerHTML = inputLine;
			} else {
				console.error("No elements have been defined");
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
