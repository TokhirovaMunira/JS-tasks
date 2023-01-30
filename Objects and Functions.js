// Created a car object, add a color property to it with the value equals 'black'
// Changed the color property of the car object to 'green'

let carObject = {
    color: 'black',
    model: 'Dodge'
}
carObject.color = 'green';


// Added the power property to the car object, which is a function and displays the engine power to the console

carObject.power = function () {
    console.log(150)
}

// Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples

function warehouse(pears, apples) {
    return pears + apples;
}


//Your name is saved in the payment terminal, write a function to define the name in the terminal
// (if you entered your name, then hello + name, if not, then there is no such name)

function helloName(name) {
    let terminalNames = [
        'Bob', 'Inna', 'Aziza'
    ];

    if (terminalNames.includes(name)) {
        console.log('Hello, ' + name);
    }

    else {
        console.log('I do not know you :(');
    }
}

// Write a function for calculating the type of argument and type output to the console

function showType(parameter) {
    console.log(typeof parameter);
}

// Write a function that determines whether a number is prime or not

function isPrimeNumber(n) {
    for (var i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return n > 1;
}