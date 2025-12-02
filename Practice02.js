// Practice for JS
//Write a function sumArray(arr) that uses a for loop to return the total.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const sumArray = arr => {
    let total = 0;
    for (const num of arr) {
        total += num;
    }
    return total;
}

//Given an array of strings, count how many times "apple" appears. Use a for…of loop.
const stringArr = ['ninja', 'apple', 'goober', 'warhammer', 'apple']
const applesFinder = str => {
    let appleCounter = 0;
    for (let word of str){
        if (word === 'apple'){
            appleCounter++;
        }
    }
    return appleCounter;
}

//Using a for loop, manually reverse a string and return the reversed version.
let phrase = 'reverse me please';
const reverser = string => {
    let reverseWord = '';
    for (let i = string.length -1; i >= 0; i--){
        let letter = string[i];
       reverseWord += letter;
    }
    return reverseWord;
}

/*Convert Two Arrays Into an Object
Write a function that takes:
const keys = ["name", "age", "city"];
const values = ["Alice", 30, "Paris"];

and returns:
{ name: "Alice", age: 30, city: "Paris" }*/
const keys = ["name", "age", "city"];
const values = ["Alice", 30, "Paris"];

const objectMaker = (keyArr, valArr) => {
    const newObj = {};
    for (let i = 0; i < keyArr.length; i++){
        console.log(`${i} is the value of i`)
        let a = keyArr[i];
        let b = valArr[i];
        newObj[a] = b;
    }
    return newObj;  
}

/* Write a factory function:
createPerson(name, age)
that returns an object with:
properties: name, age
method: greet() → logs "Hi, I'm NAME" */

const createPerson = (name, age) => {
    return {
        name_p: name,
        age_p: age,
        greet() {
            console.log(`Hi, I'm ${this.name_p}`);
        }
    }
}

/* CounterFactory
Write: createCounter(initialValue)
Return an object with methods:
increment()
decrement()
getValue()
Each method should affect the internal counter value.*/

const createCounter = initialValue => {
    return {
        initialValue, 
        increment() {this.initialValue++},
        decrement() {this.initialValue--},
        getValue () {console.log(`Current value is ${this.initialValue}`)}
    }
}

const counter = createCounter(5);

/* Create your own version of .map(): function myMap(arr, transform) { ... }
It should:
loop through each item
apply the callback
return a new array */

const myMap = (arr, transform) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        const newVar = transform(arr[i])
        newArr.push(newVar);
    }
    return newArr;
}

const square = num => {
    return num*num;
}

console.log(myMap([1, 2, 3, 4], square));