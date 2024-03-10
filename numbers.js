
let n1 = 2;
let n2 = 3;

// 1.    Create a function that returns the sum of 2 numbers
let sum = n1 + n2;
console.log(sum);


// 2.    Create a function that returns the product of 2 numbers
let product = n1 * n2
console.log(product);


// 3.    Create a function that returns the difference of 2 numbers
let different = n2 - n1;
console.log(different);


// 4.    Create a function that returns the division of 2 numbers
let div = n2 / n1;
console.log(different);



let myArray = [1, 2, 3, 4];

// 5.    Create a function that receives an array and returns the sum of all the elements inside that array.

const initialValue = 0;
const sumWithInitial = myArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

console.log(sumWithInitial);




// 6.    Create a function that receives an array and returns the greatest value inside that array
console.log(Math.max(...myArray));


// 7.    Create a function that receives an array and returns the smallest number from that array

console.log(Math.min(...myArray));



// 8.    Create a function that receives an array of numbers and returns the average of the numbers

//    Math.avr(myArray);



// 9.    Create a function that combines two arrays into one single array. 
arrange = ["a", "b", "c", "d"];
array = ["e", "f", "g"]

console.log(arrange.concat(array));

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
    let BMI=weight/(height+height);
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



