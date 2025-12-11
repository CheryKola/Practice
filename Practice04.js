//Functions 
//1
const add = (a, b) => {
    const results = a + b;
    return results;
}

//2
const toFahrenheit = c => {
    f = c * 1.8 + 32;
    return f;
}

//3
const max = arr => {
    let champ = arr[0];
    let runnerUp = arr[0];
    for (let i = 0; i < arr.length; i++){
        if ( arr[i] > runnerUp && arr[i] > champ){
            champ = arr[i];
        } else if (arr[i] > runnerUp){
            runnerUp = arr[i];
        }

    }
    return champ;
}

//4
const isPalindrome = str => {
    let revString = '';
    for (let i = str.length-1; i >= 0; i--){
        let a = str[i];
        revString += a;
    }
    if (revString === str){
        return true;
    } else {return false}
}

//Arrays
//5
const noDupes = arr => {
    const mySet = new Set(arr);
    const newArr = [...mySet];
    return newArr
}

//6
const stringCounter = arr => {
    let counter = 0;
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === 'string'){
            counter++;
        }
    }
    return counter;
}

//7
const flatten = arr => {
   let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            for (nestedEl of arr[i]){
                newArr.push(nestedEl)
            }
        } else {newArr.push(arr[i])}
    }
    return newArr;
}

//Loops
//8
const fizzBuzz = () => {
    let i = 0;
    while (i < 100) {
        if (i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz');
        } else if (i % 3 === 0){
            console.log('fizz');
        } else if (i % 5 === 0){
            console.log('buzz')
        } else {
            console.log(i)
        }
        i++;
    }
}

//9
const reverseArr = arr => {
    let newArr =[];
    for (let i = arr.length -1; i >=0; i--){
        newArr.push(arr[i]);
    }
    return newArr
}

//10
const vowelCounter = str => {
    let counter = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            counter++
        }
    }
    return counter;
}

//Objects
//11
const toObject = (keyArr, valueArr) => {
    const newObj = {}
    for (let i = 0; i < keyArr.length; i++){
        let key = keyArr[i];
        let value = valueArr[i];
        newObj[key] = value
    }
    return newObj
}

//12
const objFilter = obj => {
    let tempObj = {};
    for (key in obj){
        tempObj[key] = obj[key];
        if (obj[key] < 2){
            delete tempObj[key]
        }
    }
     return tempObj;
}

//13
const myObj1 = {1:1, 2:2};
const myObj2 = {2:2, 3:3};
const merge = (obj1, obj2) => {
    comObj = {};
    for (const key in obj1){
        comObj[key] = obj1[key];
    }
     for (const key in obj2){
        comObj[key] = obj2[key];
    }
    return comObj
}

//iterators
//14
const toSquare = arr => {
    const squared = arr.map(x => x * x);
    return squared
}

//15
const filter = arr =>{
    const results = arr.filter(x => x % 2 === 0)
    return results;
}

//16
const sum = arr => {
    const results = arr.reduce((acc, curVal) => acc + curVal);
    return results;
}

//17 Had some issues, could not solve
const customIterator = {
  current: 1,
  next() {
    if (this.current <= 5) {
      return { value: this.current++, done: false };
    } else {
      return { value: undefined, done: true };
    }
  }
};


//18
const stringLoop = str => {
    for (let letter of str){
        console.log(letter)
    }
}