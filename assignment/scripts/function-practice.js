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
console.log( 'Stretch Question 8' );
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

console.log( 'Stretch Question 9' );
console.log ( 'Test - Sum of array should = 31:', sumAll([ 3, 7, 21 ]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function inputArray( array, number ) {
  if (posArray = array.filter(number => number > 0)) {
    return posArray;
  }
  else if (array.filter(number => number > 0)){
    return array.length = 0;
  }
}

console.log( 'Stretch Question 10' );
console.log( 'Test - Expect 7, 3 and 11:', inputArray([-21, 7, -2, 3, 11,]));
console.log( 'Test - Expect empty array:', inputArray([-21, -7, -3, -2,]));
// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
//DIRECTIONS: Create a function which returns the number of true values there are in an array.


function countTrue(array) {
	 let valueCount = 0;
for(let i = 0; i < array.length; ++i){
    if(array[i] == true)
        valueCount++;
}
	return valueCount;
}

console.log( 'Stretch Question 11' );
console.log( 'Test - Expect 2:', countTrue([true, false, false, true, false]));
console.log( 'Test - Expect 0:', countTrue([false, false, false, false]));
console.log( 'Test (empty array)- Expect 0:', countTrue([]));
