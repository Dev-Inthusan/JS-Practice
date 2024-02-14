// Day 1  

let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

const sum = eval('10*10+5');

var num = 8;
var num = 10;

console.log(num);

console.log(typeof typeof 1);

console.log(3 + 4 + '5');

const num = parseInt('7*6', 10);

console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol('foo') === Symbol('foo'));

const name = 'Lydia Hallie';
console.log(name.padStart(13));
console.log(name.padStart(2));

const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);

console.log('🥑' + '💻');

// Day 1 Exercise 

1.// Comments make unreadable

2.//Welcome to learn JavaScript 

 3./*comments can make code readable, easy to reuse and informative */

//  4. string
 var e = "Young";
 console.log(typeof(e))
//  boolean
var g=20;
var h=20;
i=g>h;
console.log(typeof(i))

// undefined
var j=
console.log(typeof(j))

   
// 5
   let numberVar = 42;
   let stringVar = "Hello, World!";
   let booleanVar = true;
   let arrayVar = [1, 2, 3];
   let objectVar = { key: "value" };
   let nullVar = null;
   let undefinedVar;
   
   // Use typeof operator to check data types
   console.log("numberVar: " + typeof numberVar);
   console.log("stringVar: " + typeof stringVar);
   console.log("booleanVar: " + typeof booleanVar);
   console.log("arrayVar: " + typeof arrayVar);
   console.log("objectVar: " + typeof objectVar);
   console.log("nullVar: " + typeof nullVar);
   console.log("undefinedVar: " + typeof undefinedVar);
   // 6
   let varity;
   let varities;
   let varities1;
   let varities2;
// 7
   let variable1 = 10;
   let variable2 = "Hello, World!";
   let variable3 = true;
   let variable4 = [1, 2, 3];
// 8
let firstName = "John";
let lastName = "Doe";
let maritalStatus = "Single";
let country = "United States";
let age = 30;

// 9
let = "John", lastName = "Doe", maritalStatus = "Single", country = "United States", age = 30;
   
// 10
var myAge = 25;
var yourAge = 30;
   
   console.log("I am " + myAge + " years old.");
   console.log("You are " + yourAge + " years old.");


// Day2
// 1.console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2.console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\" - Mother Teresa");

// 3.let stringNumber = '10';

// if (typeof stringNumber === 'string') {
//   // Convert to number if the type is string
//   stringNumber = parseInt(stringNumber, 10);
// }

// console.log(stringNumber); // Output: 10

// 4.let floatValue = parseFloat('9.8');

// if (floatValue !== 10) {
//   // Set to 10 if not equal
//   floatValue = 10;
// }

// console.log(floatValue); // Output: 10

// 5.let pythonString = 'python';
// let jargonString = 'jargon';

// if (pythonString.includes('on') && jargonString.includes('on')) {
//   console.log("'on' found in both python and jargon.");
// } else {
//   console.log("'on' not found in both python and jargon.");
// }

// 6.let sentence = "I hope this course is not full of jargon.";

// if (sentence.includes('jargon')) {
//   console.log("'jargon' is in the sentence.");
// } else {
//   console.log("'jargon' is not in the sentence.");
// }

// 7.let randomNumber = Math.floor(Math.random() * 101); // Generates a random integer between 0 and 100

// console.log(randomNumber);

// 8.let randomNumber = Math.floor(Math.random() * 51) + 50; // Generates a random integer between 50 and 100

// console.log(randomNumber);

// 9.let randomByte = Math.floor(Math.random() * 256); // Generates a random integer between 0 and 255

// console.log(randomByte);

// 10.let myString = "JavaScript";
// let randomIndex = Math.floor(Math.random() * myString.length);
// let randomCharacter = myString.charAt(randomIndex);

// console.log("Random character:", randomCharacter);

// 11.console.log("1 1 1 1 1");
// console.log("2 1 2 4 8");
// console.log("3 1 3 9 27");
// console.log("4 1 4 16 64");
// console.log("5 1 5 25 125");

// 12.let sentence = 'You cannot end a sentence with because because because is a conjunction';
// let slicedPhrase = sentence.substr(sentence.indexOf('because'), 23);

// console.log(slicedPhrase);

// 13.

// 1
let challeng = 'learn Javascript';
// 2
let challen = 'learn Javascript';
console.log(challe);
// 3
let challe = 'learn Javascript';
console.log(challenge.length);
// 4
let arasan = 'learn Javascript';
let uppercasearasan = arasan.toUpperCase();

console.log(uppercasearasan);
// 5
let soap = 'learn Javascript';
let lowercasesoap = soap.toLowerCase();

console.log(lowercaseChallenge);
// 6
let velvet = 'learn Javascript';
let firstWord = velvet.substr(0, velvet.indexOf(' '));

console.log(firstWord);

// 7
let lux = 'learn Javascript';
let slicedPhrase = lux.substring(lux.indexOf('learn'), lux.length) + ' Of JavaScript';

console.log(slicedPhrase);

// 8
let rani = 'learn Javascript';

if (santol.includes('Script')) {
  console.log('The string contains the word "Script".');
} else {
  console.log('The string does not contain the word "Script".');
}

// 9
let gokul = 'learn Javascript';
let wordsArray = gokul.split(' ');

console.log(wordsArray);


// 10
let dove = 'learn Javascript';
let wordsArray1 = dove.split(' ');

console.log(wordsArray);

// 11
let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let companiesArray = companiesString.split(', ');

console.log(companiesArray);

// 12
let dada = 'learn Javascript';
let updatedChallenge = dada.replace('learn Javascript', '30 Days Of Python');

console.log(updateddada);

// 13
let hahah = 'learn Javascript';
let characterAtIndex15 = haha.charAt(15);

console.log(characterAtIndex15);


// 14
let kaka = 'learn Javascript';
let charCodeOfJ = kaka.charCodeAt(challenge.indexOf('J'));

console.log(charCodeOfJ);

// 15
let baby = 'learn Javascript';
let positionOfA = baby.indexOf('a');

console.log(positionOfA);

// 16
let vadi = 'learn Javascript';
let lastPositionOfA = vadi.lastIndexOf('a');

console.log(lastPositionOfA);

// 17
let sentence = 'You cannot end a sentence with because because because is a conjunction';
let positionOfBecause = sentence.indexOf('because');

console.log(positionOfBecause);

// 18
let sentence1 = 'You cannot end a sentence with because because because is a conjunction';
let lastPositionOfBecause = sentence.lastIndexOf('because');

console.log(lastPositionOfBecause);


// 19
let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
let positionOfBecause1 = sentence.search(/\bbecause\b/);

console.log(positionOfBecause);


// 20
let stringWithWhitespace = ' learn Javascript ';
let trimmedString = stringWithWhitespace.trim();

console.log(trimmedString);


// 21
let vim = 'learn Javascript';
let startsWithLearn = vim.startsWith('learn');

console.log(startsWithLearn);

// 22
let santa = 'learn Javascript';
let endsWithJavascript = santa.endsWith('Javascript');

console.log(endsWithJavascript);

// 23
let siu = 'learn Javascript';
let matches = siu.match(/a/g);

console.log(matches);




// 24
let part1 = '30 Days of ';
let part2 = 'JavaScript';
let mergedString = part1.concat(part2);

console.log(mergedString);




// 25
let dude = 'learn Javascript';
let repeatedString = dude.repeat(2);

console.log(repeatedString);

