//print numbers 1-10 using a for loop, while loop, and a do...while loop

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const phrase = 'Testing';

const forLoop = array => {
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

const forLoopBackwards = array => {
    for(let i = array.length - 1; i >= 0; i--){
        console.log(array[i]);
    }
}

const whileLoop = array => {
    let i = 0;
    while (i < array.length){
        console.log(array[i]);
        i++;
    }
}

const whileLoopBackwards = array => {
    let i = array.length - 1;
    while (i >= 0){
        console.log(array[i]);
        i++;
    }
}

const doWhileLoop = array => {
    let i = 0;
    do {
        console.log(array[i]);
        i++
    } while (i <= array.length);
}

const doWhileLoopBackwards = array => {
    let i = array.length - 1;
    do {
        console.log(array[i]);
        i--
    } while (i >= 0);
}

console.log('for loop ' + forLoop(numbers));
console.log('for loop backwards ' + forLoopBackwards(numbers));
console.log('while loop ' + whileLoop(numbers));
console.log('while loop backwards ' + whileLoopBackwards(numbers));
console.log('do...while loop ' + doWhileLoop(numbers));
console.log('do...while loop ' + doWhileLoopBackwards(numbers));



// Iterators
for (let x of numbers){
    console.log(x);
}

for (let x of phrase){
    console.log(x);
}

// Maps and Sets
const userLogins = new Map();
userLogins.set('username', 'Jonny');
userLogins.set('password', 'apple123');

for (const [key, value] of userLogins){
    console.log(`key ${key} = ${value} `)
}


