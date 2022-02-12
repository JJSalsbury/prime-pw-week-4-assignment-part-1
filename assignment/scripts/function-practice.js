console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'

function hello() {
  return 'Hello World!';
}
// Call the function to test
hello();
//console.log('Test - should say "Hello World!"', hello());
console.log( 'Question 1' );
console.log( 'Test - ', hello() );

// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName( name ) {
  return 'Hello, ' + name;
}
// Remember to call the function to test

console.log( 'Question 2' );
console.log( 'Test - ', helloName('JJ') );

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber;
  return answer;
}

  // return firstNumber + secondNumber;
console.log( 'Question 3' );
console.log( 'Test - (Adding numbers) 3 + 7 =', addNumbers( 3, 7 ) );

// 4. Function to multiply three numbers & return the result
function multiplyThree( num0, num1, num2) {
  let answer = num0 * num1 * num2;
  return answer;
}

console.log( 'Question 4' );
console.log( 'Test - (Multiplying three numbers) 3 x 7 x 21 =', multiplyThree( 3, 7, 21 ) );

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'Question 5' );
console.log( '3 isPositive - should say true', isPositive(3) );
console.log( '0 isPositive - should say false', isPositive(0) );
console.log( '-3 isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

function getLast( array ) {
  if (array.length >= 0) {
    return array[array.length-1];
  }
}

console.log( 'Question 6');
console.log('Test - should return last item in array: [ 1, 2, 3 ]', getLast([ 1, 2, 3 ]) );
console.log('Test - should return last item in array: [ 4, 5, 6 ]', getLast([ 4, 5, 6 ]) );
console.log('Test - should return "undefined" in empty array: []', getLast([]) );
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

function find( value, array ){
  for (let i = 0; i<array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
console.log( 'Question 7' );
console.log( 'Test - find a value in an array: 1 [ 1, 2, 3 ] should return "true"', find (1,[ 1, 2, 3, ]) );
console.log( 'Test - find a value in an array: 7 [ 1, 2, 3 ] should return "false"', find (7,[ 1, 2, 3, ]) );

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
if (letter === string.charAt(0)) {
  return true;
}
  return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0;
//TODO: loop to add items
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
  return sum;
}

console.log ( 'Test - Sum of array should = 31:', sumAll([ 3, 7, 21 ]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function newArray( array ) {
  let emptyArray = [];
  for (let i=0; i < array.length; i++) {
    if (array[i] > 0) {
      emptyArray.push(array[i]);
    }
  }
    return emptyArray;
}

console.log( 'Test - expect empty array:', newArray([-1, -3, -2, 4, 6, 55]));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
//
