/*
* Filename: advancedCode.js
* Description: This code demonstrates advanced concepts in JavaScript, including design patterns and complex algorithms.
*/
 
// Define a namespace for our code
var AdvancedCode = {};

//------------------------
// MODULE PATTERN EXAMPLE
//------------------------

AdvancedCode.Module = (function () {
	
	// Private variables and functions
	var privateVar = "I am a private variable";
	
	function privateFunction() {
		console.log("This is a private function");
	}
	
	// Public interface
	return {
		publicVar: "I am a public variable",
		publicFunction: function () {
			console.log("This is a public function");
		},
		getPrivateVar: function () {
			return privateVar;
		},
		setPrivateVar: function (newVal) {
			privateVar = newVal;
		}
	};
})();

//------------------------
// PROTOTYPE INHERITANCE EXAMPLE
//------------------------

AdvancedCode.Shape = function (x, y) {
	this.x = x;
	this.y = y;
};

AdvancedCode.Shape.prototype.move = function (dx, dy) {
	this.x += dx;
	this.y += dy;
};

AdvancedCode.Rectangle = function (x, y, width, height) {
	AdvancedCode.Shape.call(this, x, y); // Call parent constructor
	this.width = width;
	this.height = height;
};

AdvancedCode.Rectangle.prototype = Object.create(AdvancedCode.Shape.prototype);
AdvancedCode.Rectangle.prototype.constructor = AdvancedCode.Rectangle;

//------------------------
// ALGORITHM EXAMPLE: FIBONACCI SEQUENCE
//------------------------

AdvancedCode.fibonacci = function (n) {
	if (n <= 0) {
		return [];
	} else if (n === 1) {
		return [0];
	} else if (n === 2) {
		return [0, 1];
	}
	
	var sequence = [0, 1];
	for (var i = 2; i < n; i++) {
		var nextNumber = sequence[i - 1] + sequence[i - 2];
		sequence.push(nextNumber);
	}
	return sequence;
};

//------------------------
// ASYNCHRONOUS FUNCTION EXAMPLE
//------------------------

AdvancedCode.asyncFunction = function (callback) {
	setTimeout(function () {
		var result = 42;
		callback(result);
	}, 1000);
};

//------------------------
// MAIN CODE
//------------------------

console.log(AdvancedCode.Module.publicVar); // Output: "I am a public variable"
console.log(AdvancedCode.Module.getPrivateVar()); // Output: "I am a private variable"
AdvancedCode.Module.setPrivateVar("Updated private value");
console.log(AdvancedCode.Module.getPrivateVar()); // Output: "Updated private value"

var shape = new AdvancedCode.Shape(0, 0);
shape.move(10, 20);
console.log(shape.x, shape.y); // Output: 10, 20

var rectangle = new AdvancedCode.Rectangle(0, 0, 100, 200);
rectangle.move(50, 100);
console.log(rectangle.x, rectangle.y, rectangle.width, rectangle.height); // Output: 50, 100, 100, 200

console.log(AdvancedCode.fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

AdvancedCode.asyncFunction(function (result) {
	console.log(result); // Output: 42 (after 1 second delay)
});