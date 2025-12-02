// Callback Practice
//Write a function processUserInput that takes a callback and a string. The callback should transform the string (e.g., make it uppercase).
const upperCase = str => {
   console.log(str.toUpperCase());}

function processUserInput(input, callback) {
    // Your code here
    if (typeof input !== 'string'){
        console.log('input is not a string')
    }
    callback(input);
}
processUserInput("hello", upperCase)


//Custom Map Implementation
//Create your own version of map called myMap that takes an array and a callback, and returns a new array.
const numbers = [2, 4, 6];
const myMap = (array, callback) =>{
    results = callback(array);
    return console.log(results);
}
const newArray = array => {
    newArr = [];
    for (let x of array){
        newArr.push(x*x)
    } return newArr;
}

// Filtering with Callbacks
//Write a function filterEvenNumbers that uses a callback to decide which numbers to keep.
function filterEvenNumbers(arr, callback) {
    results = arr.filter(callback);
    return results
}
console.log(filterEvenNumbers([1, 2, 3, 4], num => num % 2 === 0)); // [2, 4]

// Higher-Order Function Math Operations
//Create a function operate that takes two numbers and a callback (e.g., add, subtract, multiply).

function operate(a, b, callback) {
   return callback(a, b)
}
console.log(operate(5, 3, (x, y) => x + y)); // 8

//Chain of Higher-Order Functions
//Write a function transformNumbers that:
//Doubles each number & Filters out numbers greater than 10 & Sums them up
//Use map, filter, and reduce.
const transformNumbers = array => {
    const double = array.map(x => x*2)
    let filters = array.filter((x) => x > 10)
    const reduce = array.reduce((acc, curr)=> acc + curr)
    return console.log('Sum => ' + reduce + 'Filter => ' + filters + 'Double => ' + double)
}
console.log(transformNumbers([2, 5, 8])); // (Double → [4,10,16], Filter → [4,10], Sum → 14)

// Async Callback Simulation
// Simulate an API call using setTimeout and a callback.
