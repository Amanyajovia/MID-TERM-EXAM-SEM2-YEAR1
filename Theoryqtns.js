// Section A: Multiple Choice Questions (8 Marks)
// 1. b
// 2. c
// 3. b
// 4. a
// 5. b
// 6. d
// 7. d
// 8. c

// Section B: Essay Questions (10 Marks)

// 1. Explain the difference between let, const, and var in JavaScript.
//let:
// let is block-scoped, meaning it is only accessible within the block where it is declared.
// let is hoisted, but unlike var
// You can reassign a value to a variable declared with let.

// var:
// var: Function-scoped unlike let and const
// can be reassigned
// and hoisted with initialization.

// const:
// Block-scoped unlike var
// cannot be reassigned unlike let and var
// hoisted but not initialized. 
// It is used for constants.


// 2. What are JavaScript objects, and how are they different from arrays?
// object are collection of structured key value pairs
// store related properties
// store details about anything e.g person, product.
// these are mainly strings or symbols
// objects' values are in {}

            // while

// ARRAYS:
// array are collection of  indexed value element
// are mainly umbers (starting from 0)
// Store ordered lists of data
// array[index]
//  Store lists like names, numbers, or
 


// 3. Explain the difference between == and === in JavaScript.
// == (Loose Equality )
// This checks if the values are equal irrespective of the datatypes.
// performes type coercion.


                //    while
// === (Strict Equality)
// Compares both value and the datatype.
// Does not perform any type coercion.
// Both the value and the datatype must be the same for the comparison to return true.

// 4. What is an event in JavaScript? Provide an example of how to handle a button 
// An event is an action that happens in the browser when a user interacts with a web page.
// such as  click form submissions and key presses.
// Access the button by its ID
// This can be done in an html file and linked with js

const button = document.getElementById('myButton');

// Add an event listener to the button to listen for a click event
button.addEventListener('click', function() {
//   Action to perform when the button is clicked
  const message = document.getElementById('message');
  message.textContent = 'Button clicked! You did it! 🎉';
});


// 5. Describe the forEach and map methods in JavaScript. How are they similar, and 
// how do they differ?


