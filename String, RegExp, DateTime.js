// 1. Given the string 'ahb acb aeb aeeb adcb axeb'. 
//Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'

const testStr = 'ahb acb aeb aeeb adcb axeb';
const re = /a.b/g

console.log(testStr.match(re))


// 2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

const testStr2 = '2 + 3 223 2223';
const re2 = /2\s\+\s3/g

console.log(testStr2.match(re2))

// 3. Get the day, month and year of the current date and output it to the console separately

let today = new Date();
let dd = today.getDate();

let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();

console.log(dd, mm, yyyy)