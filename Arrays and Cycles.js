
//   1 - Given an array consisting of movie names, 
//iterate over the array with the output of the names of each movie to the console


let movies = ["Thor: Love and Thunder", " I Am Groot", "She-Hulk"];

console.log(movies)

//     2 - Given an array of car manufacturers, convert the array 
//to a string and back to an array

let cars = ['Maruti', 'Hyundai', 'Toyota', 'Honda'];
let allCars = cars.toString()

console.log(allCars);

//    3 - Given an array of the names of your friends, 
//add the words hello to each element of the array

let friendsName = ['Liam', 'Olivia', 'Noah', 'Emma', 'Oliver'];

for (let el of friendsName) {
    console.log('Hello, ' + el);
}

//  4 - Convert numeric array to Boolean

let numbers = [1, 2, 3];

console.log(Boolean(numbers));

// 5 - Sort the array [1,6,7,8,3,4,5,6] in descending order

let numberArray = [40, 1, 5, 200];
function compareNumbers(a, b) {
    return b - a;
}
console.log(numberArray.sort(compareNumbers))


//    6 - Filter array [1,6,7,8,3,4,5,6] by value> 3
function isBigEnough(value) {
    return value > 3;
}

const filtered = [1, 6, 7, 8, 3, 4, 5, 6].filter(isBigEnough);

console.log(filtered);


//   7 - Write a function that takes two parameters - an array and a number and 
//   outputs the index of an array element equal to a number

let numbers2 = [8, 6, 12, 108];

function getIndex(arr, num) {
    return arr.indexOf(num);
}

console.log(getIndex(numbers2, 6));



//  8 - Implement a loop that will print the number 'a' until it is less than 10

for (let i = 0; i < 10; i++) {
    console.log('a');
}

//  9 - Implement a loop that prints prime numbers to the console

function isPrimeNumber(n) {
    for (var i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return n > 1;
}

for (let i = 0; i < 100; i++) {
    if (isPrimeNumber(i)) {
        console.log(i)
    }
}

// 10 - Implement a loop that prints odd numbers to the console

for (let i = 0; i < 10; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}