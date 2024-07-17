

// 1.    Create a function that returns the sum of 2 numbers
function sum(num1,num2){
    let sum = num1 + num2;
    return sum;
}

console.log(sum(4,2));


// 2.    Create a function that returns the product of 2 numbers
function prod(num1,num2){
    let result= num1 * num2;
    return result;
}

console.log(prod(4,2));


// 3.    Create a function that returns the difference of 2 numbers
function diff(num1,num2){
    let different = num1 - num2;
    return different;
}

console.log(diff(4,2));


// 4.    Create a function that returns the division of 2 numbers
function div(num1,num2){
    let division = num1 / num2;
    return division;
}

console.log(div(4,2));


// 5.    Create a function that receives an array and returns the sum of all the elements inside that array.

let myArray = [1, 2, 3, 4];
const initialValue = 0;
function sumarray(){
    const sumWithInitial = myArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );
    console.log(sumWithInitial);
}
sumarray();



// 6.    Create a function that receives an array and returns the greatest value inside that array
function greatest(){
    let gret=Math.max(...myArray);
    return gret;
}
console.log(greatest());


// 7.    Create a function that receives an array and returns the smallest number from that array

function mini(){
    let minii=Math.min(...myArray);
    return minii;
}
console.log(mini());



// 8.    Create a function that receives an array of numbers and returns the average of the numbers

   const numbers = [3,4,5,8];
   function average(){
    const sum = numbers.reduce((a,c) => a + c, 0);
   const avg = sum / numbers.length;
   return avg;
   }


console.log(average());



// 9.    Create a function that combines two arrays into one single array. 
arrange = ["a", "b", "c", "d"];
array = ["e", "f", "g"]
function conc(){
    let con=arrange.concat(array);
    console.log(con);
}
conc();
// 10.    Create a function that displays a pattern like this:

function showPattern() {
    for (let i = 1; i <= 4; i++) {
        console.log("* * * *");
    }
}
showPattern();
// 11.    Create a function that displays a pattern like this:
// 1 1 1 1 
// 1 1 1
// 1 1 

function showOnes() {
    for (let i = 4; i >1; i--) {
        let out = ""
        for (let j = 1; j <= i; j++) {
            out = out + "1 ";
            
        }
        console.log(out);

    }
}
showOnes();

// 12.    Create a function that displays a pattern like this:
// 1 1 1 1 
// 1 1 1 0  
// 1 1 0 0  
// 1 0 0 0  




// 13.    Create a function that displays a pattern like this:
// 1 1 1 1 1
// 1 0 0 0 1
// 1 0 0 0 1
// 1 0 0 0 1
// 1 1 1 1 1





// 14.    Create a function that displays a pattern like this:
//       1 
//     1
//   1 
// 1
function ones(){
    for(let i=4;i>=1; i--){
        let put="";
        for(let j=1; j<=i; j++){
           put+=" ";
        }
      console.log(put +"1");
    }
}
ones();

// 15. Create a function to reverse the order of the elements inside the given array.   
var array = [1, 3, 4, 3, 7, 8, 0, 12, 19];
function rever() {
    console.log(array.reverse());
}
rever();

// 16.    Given an array like this: 
var numberss = [2,4,8,2,1,2,2,6,3,4];
// a.    Create a function to sort and arrange these elements of the array in ascending order.
function sort(){
    let acs=numberss.sort((a,b)=> a-b);
    return acs;
}
console.log(sort())
// b.    Modify the first array to make sure that it will also display the last 3 numbers and the first 3 numbers in front of the sorted array
// c.    From the same sorted array, also display the first 3 numbers


// 17.    Create a function that determines the age classification of people:
function grade(age) {
    if (age <= 12) {
        console.log("MIMICRY");
    }

    else if (13 < age && age <= 19) {
        console.log(" SELF-DISCOVERY:");
    }
    else if (20 < age && age <= 45) {
        console.log(" COMMITMENT: ");
    }
    else {
        console.log(" LEGACY: ");
    }

}
grade(60);
// 18.    Create a function that calculates the BMI of a person and returns the specific classification of a person according to the height and weight provided by a user.
//     How to calculate Body Mass Index:
//
function bmi(weight,height){
    let BMI=weight/(height*height);
    console.log(BMI);
}
bmi(20,2);

// 19.    Create a function that counts the number of characters that make up a string

function count(){
    var str = "Hello world";

    console.log(str.trim().length);
}

count();



// 20.    Create a function that displays an even number between 1 and 100

function evenNumbers() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

}
evenNumbers();


// 21.    Write a function that calculates the square of a number.
function square(num) {

    console.log(Math.sqrt(num));
}
square(9);


// 22.    Write a function that checks if a number is even.

function checkeven(number) {
    if (number % 2 === 0) {
        console.log("number is even");
    }

    else {
        console.log("number is odd");
    }
}
checkeven(8);


// 23.    Write a function that checks if a number is odd.

function checkeven(number) {
    if (number % 2 === 0) {
        console.log("number is even");
    }

    else {
        console.log("number is odd");
    }
}
checkeven(7);


// 24.    Write a function that returns the maximum of two numbers.

function maxi(num1, num2) {
    let result = Math.max(num1, num2);
    console.log("maximum number is :" + "" + result)
}
maxi(10, 5)

// 25.    Write a function that returns the minimum of two numbers.

function mini(num1, num2) {
    let result = Math.min(num1, num2);
    console.log("minimum number is :" + "" + result)
}
mini(10, 5)
// 26.    Write a function that calculates the factorial of a number.

 
 function factor(num){
    let fact = 1;
    for (i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log("The factorial of" + " " +num + " " +"is" + " " +fact);
}
factor(4);
 
// 27.    Write a function that reverses a string.
let stri=["louise", "mary"];
function rev(){
   
   console.log(stri.reverse());
}
rev()

// 28.    Write a function that checks if a string is a palindrome.


// 29.    Create a function that displays odd numbers between 1 and 100
function evenNumbers() {
    for (let i = 1; i < 100; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }

}
evenNumbers();

// 30.    Create a function that displays multiples of 5

function multiple(num){
    for(let i=1; i<=10 ;i++){
        sum= num*i;
     
     console.log(num + " " + "x" +" "+ i + " " + "="+" " + sum);
    }
}
multiple(6);
// 31.    Create a function that returns the square root of a given number.

function square(num) {


    return (console.log(Math.sqrt(num)));
}
square(16);
// 32.    Create a function that receives two numbers and returns the bigger number.

function biggerNumber(num1, num2) {
    if (num1 > num2) {
        console.log("the num1 is the bigest number ");
    }
    else {
        console.log("the num2 is the bigest number ");
    }

}
biggerNumber(10, 100)
// 33.    Create a function that receives a string and changes it into capital letters.

function myNme(name) {
    let upp = name.toUpperCase();
    console.log(upp);

}
myNme("louise");

// 34.    Create a function called “stringModifier”. This function allows a user to provide a string, and
//  then provide the position they want to modify, and a character to replace the modified one from the string. 
// This function will receive 3 arguments the first argument will be a string, 
// the second will be the position of a specific



// 35.    Write a function that counts the number of vowels in a string.

let word= "my name is marie louise" ;

function  countVawels(str){
    c=str.match(/[aeiou]/gi)
        return c.length;
    }

console.log(countVawels(word));

//36. Write a function that counts the number of consonants in a string.

let conso= "my name is marie louise" ;

function  countconso(str){
    c=str.match(/[bcdfghjklmnpqrstvwxyz]/gi)
        return c.length;
    }

console.log(countconso(conso));

// 37 Write a function that finds the index of a given character in a string.

let str="louise is a student of shecancode front end developer class in cohort 9";
function indeces(stri){
   let index=str.indexOf(stri);
   console.log(index);
}

indeces("of");



// 38.    Write a function that removes duplicates from an array.

   
let arr = ["apple", "mango",
          "apple", "orange", "mango", "mango"];
 
function removeDuplicates(arr) {
    let unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
console.log(removeDuplicates(arr));

// 39.    Write a function that checks if a given value is present in an array

let strin= ["apple", "mango",
"apple", "orange", "mango", "mango"];

function present(str){
    if(strin.indexOf(str)!== -1){

     console.log("yes the value is here");
    }
    else{
        console.log("oops! the value not here");
    }
}
present("mang");

// 40.    Write a function that squares each element of an array.

function arrayMadness(a) {

    let squaredA = [];
  
    for (let i = 0; i < a.length; i++) {
      squaredA.push(Math.pow(a[i], 2));
    }
  
    return squaredA;
  }
  
  console.log(arrayMadness([4, 5, 6]));

//   41.    Write a function that returns the first n elements of an array

var ary = ['first', 'second', 'third', 'fourth', 'fifth'];
function first(){
    
   console.log(ary[0]);
}
first();

// 42.    Write a function that removes the last element from an array.

var ary = ['first', 'second', 'third', 'fourth', 'fifth'];
function last(){
    ary.pop();
   console.log(ary);
}
last();

// 43.    Write a function that sorts an array of numbers in ascending order.

let ar=[2,7,4,5,9,0,3,1];
function ascending(){
    ar.sort((a,b)=>a-b);
    console.log(ar);
}
ascending();
// 44.    Write a function that checks if all elements in an array are positive.

const isGreatthan = (currentValue) => currentValue > 0;

const array1 = [1, 30, 39, 29, 10, 13];
function great(){
    console.log(array1.every(isGreatthan));
}
great();



// 45.    Write a function that calculates the sum of the even numbers in an array

let numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEvens = (numStr) => {
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    if (i % 2 === 0){ 
    sum = sum + numStr[i];
    }
  }
  return sum;
}
 
console.log(sumEvens(numStr));

// 46.    Write a function that converts an array of strings to uppercase

var array2 = ["melon","banana","apple","orange","lemon"];
function upper(){
    array2 = array2.map(function(x){ return x.toUpperCase(); })
    console.log(array2);
}
upper();
// 47.    Write a function that generates a random number between a given range
let min = 21.1;
let max = 35.2;
function rand(){
    let randomNum = Math.random() * (max - min) + min;

    console.log(randomNum);
}
rand();

// 48.    Write a function that returns the reverse of an array

var arra = [10, 5, 4, 9, 7, 18, 10, 2, 20];
function reve() {
    console.log(arra.reverse());
}
reve();

// 49.    Write a function that calculates the Fibonacci sequence up to n numbers


// 50.    Write a function that checks if an array is sorted in ascending order.


// 51.    Write a function that filters out negative numbers from an array.


// 52.    Write a function that calculates the square root of a number.

function squar(n){
    sql=Math.sqrt(n)
    console.log("squareroot of"+ " "+ n + " " + "is" +" "+ sql);
}
squar(16);

// 53.    Write a function that finds the median of an array of numbers.

function median(a) {
   const mid = Math.floor(a.length / 2);
   const sortedArr = a.sort((a, b) => a - b);
 
   if (a.length % 2 === 0) {
      return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
   } else {
      return sortedArr[mid];
   }
}
const a = [11, 12, 13, 14, 15, 16, 17, 18, 19,20,21,22,23];
console.log(median(a));

// 54.    Write a function that capitalizes the first letter of each word in a sentence.
function capital_letter(str) 
{
    // Split the input string into an array of words
    str = str.split(" ");

    // Iterate through each word in the array
    for (var i = 0, x = str.length; i < x; i++) {
        // Capitalize the first letter of each word and concatenate it with the rest of the word
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    // Join the modified array of words back into a string
    return str.join(" ");
}

// Log the result of calling capital_letter with the given string to the console
console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word."));

// 55.    Write a function that checks if a given year is a leap year.
function leapyear(year) {
   
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

// Test the function with various years and log the results to the console
console.log(leapyear(2016)); 
console.log(leapyear(2000)); 
console.log(leapyear(1700)); 
console.log(leapyear(1800)); 
console.log(leapyear(100));

// 56.    Write a function that finds the intersection of two arrays.
function findIntersection(arr1, arr2) {
    const intersection = [];
    for (let i = 0; i < arr1.length; i++) {
      const element = arr1[i];
      if (arr2.indexOf(element) !== -1 && intersection.indexOf(element) === -1) {
        intersection.push(element);
      }
    }
    return intersection;
  }

  console.log(findIntersection( [1, 2, 3, 4],[3, 4, 5, 6]));

// 57.    Write a function that checks if a number is prime.

// 58.    Write a function that returns the power of a number (base, exponent).

// 59.    Write a function that calculates the area of a rectangle.

// 60.    Write a function that calculates the perimeter of a rectangle.

// 61.    Write a function that checks if a given string contains only digits.

// 62.    Write a function that counts the number of words in a sentence.

// 63.    Write a function that converts a temperature from Celsius to Fahrenheit.

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}
cToF(60);

// 64.    Write a function that generates a pyramid pattern of a given height.

// 65.    Switch Case:
// a.    Calculator Switch:
// Write a JavaScript program that takes two numbers and an operator (+, -, *, /) as input and uses a switch case to perform the corresponding operation.

// b.    Day of Week:
// Create a program that takes a number representing a day of the week (1-7) and outputs the name of the day.

// c.    Grade System:
// Design a grading system that takes a student's score as input and returns the corresponding grade using a switch case.

// d.    Traffic Light:
// Simulate a traffic light using a switch case. The program should output the color of the traffic light based on user input (1 for red, 2 for yellow, and 3 for green).

// e.    Month Name:
// Write a program that takes a number (1-12) representing a month and outputs the name of the month using a switch case.

// f.    Simple Menu:
// Implement a simple menu system using a switch case. The menu should have options for different operations, and the program should execute the selected operation.

// g.    Currency Converter:
// Build a currency converter that converts between different currencies using a switch case. Users should input the amount, source currency, and target currency.

// h.    Shape Area:
// Write a program that calculates and outputs the area of different shapes (circle, square, triangle) based on user input using a switch case.

// i.    Season Detector:
// Create a program that takes a month as input and outputs the corresponding season (spring, summer, fall, winter) using a switch case.

// 66.    Loops on Arrays:
// a.    Array Sum:
// Write a function that calculates the sum of all elements in an array.

// b.    Even Numbers:
// Create a program that prints all even numbers from an array.

// c.    Array Reverse:
// Implement a function to reverse the elements of an array.

// d.    Array Filter:
// Write a program that filters out all elements less than 10 from an array.

// e.    Array Average:
// Calculate and print the average of elements in an array.

// f.    Array Search:
// Implement a function that searches for a specific element in an array and returns its index.

// g.    Duplicate Elements:
// Write a program to find and print duplicate elements in an array.

// h.    Array Sorting:
// Sort an array of numbers in ascending order using any sorting algorithm.

// 67.    Loops on Objects:
// a.    Object Properties:
// Write a program to print all the properties of an object.

// b.    Object Values:
// Create a function that prints all the values of an object.

// c.    Object Key Search:
// Implement a function that searches for a specific key in an object.

// d.    Object Manipulation:
// Write a program that modifies the values of an object based on certain conditions.

// e.    Object Filtering:
// Create a function that filters out key-value pairs from an object based on a condition.

// f.    Object Merging:
// Combine two objects into a single object.

// g.    Object Size:
// Write a program that calculates and prints the number of key-value pairs in an object.

// h.    Nested Object:
// Access and print values from a nested object.

// i.    Object Sorting:
// Sort the keys of an object in alphabetical order.

// j.    Object Transformation:
// Create a function that transforms the values of an object (e.g., convert all values to uppercase).

// 68.    Functions Programming:
// a.    Power Function:
// Implement a function to calculate the power of a number.

// b.    Array Max and Min:
// Write a function that finds the maximum and minimum values in an array.

// c.    The sum of Digits:
// Calculate the sum of digits of a given number using a function.

// d.    GCD (Greatest Common Divisor):
// Write a function to find the greatest common divisor of two numbers.

// e.    Random Number Generator:
// Create a function that generates a random number within a specified range


