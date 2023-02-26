//? ------------------------------chapter 13to15-----------------------------------------

//!question:01
// code
// var emptyArray=[]

//!question:02
// code:
// var stuName=[]

//!question:03
// code:
// var arr=['daniyal','ali','afaq','nazir','shams'];

//!question:04
// code:
// var arr=['12','003','23','54','43'];

//!question:05
// code:
// var arr=['true','false'];

//!question:06
// code:
// var arr=['daniyal','ali','afaq','nazir','44','566','true','false'];

//!question:7
// code:
// var qualification=['ssc','hsc','bcs','bs','bCom','ms','m.phil','phd']
// console.log(qualification)

//!question:8
// code:
// var nam=['ahmed','ali','shams'];
// var score=['320','450','300'];
// var totalMarks=500;
// console.log("Score of"+" "+nam[0]+ " " +"is" + " " + score[0]+ " " +"percentage :"+score[0]/500*100);
// console.log("Score of"+" "+nam[1]+ " " +"is" + " " + score[1]+ " " +"percentage :"+score[1]/500*100);
// console.log("Score of"+" "+nam[2]+ " " +"is" + " " + score[2]+ " " +"percentage :"+score[2]/500*100);

//!question:9
// code:
// //? part(A)
// var color=['red','blue','pink'];
// console.log(color);
// var user=prompt("what color he/ wants to add this beginning:");
// color.unshift(user);
// console.log(color);

// code:
//? part(B)

// var color=['red','blue','pink'];
// console.log(color);
// var user=prompt("what color he/ wants to add at the end of array:");
// color.push(user);
// console.log(color);

// code:
//? part(c)
// var color=['red','blue','pink'];
// console.log(color);
// var user1=prompt("what color he/ wants to add at the end of array:");
// var user2=prompt("what color he/ wants to add at the end of array:");
// color.unshift(user1,user2);
// console.log(color);

// code:
//? part(d)
// var color=['red','blue','pink'];
// console.log(color);
// var user1=prompt("what color he/ wants to add at the end of array:");
// color.shift(user1);
// console.log(color);

// code:
//? part(e)
// var color=['red','blue','pink'];
// console.log(color);
// var user1=prompt("what color he/ wants to add at the end of array:");
// color.pop(user1);
// console.log(color);

// code:
//? part(f)
// var color=['green','blue','black']
// var  color1=prompt("Enter a color:");
// var  indexNum=prompt("Enter a index number:");
// color.splice(indexNum,0,color1)
// console.log(color)

// code:
//? part(g)
// var color=['green','blue','black'];
// console.log(color);
// var indexNum=+prompt("Enter a start index number ");
// var limit=+prompt("Enter a counter to delete number: ")
// color.splice(indexNum,limit)
// console.log(color)

//!question:10
// Array sort method
// var stuScore=[320,230,480,120];
// stuScore.sort()
// console.log(stuScore)

//!question:11
// code:
// var cities=['karachi','lahore','islamabad','quetta','peshawar'];
// // copy_list of cities:
// var newObj=cities.slice(2,4)
// console.log(newObj);

//!question:12
// code:

// var arr=['this','is','my','cat'];
// arr.join('')
// console.log(arr.join());
// console.log(arr.join(''));
// console.log(arr.join('-'));

//!question:13

// create an empty array
let fifoArray = [];

// add values to the array using push()
// fifoArray.push("keyboard");
// fifoArray.push("Mouse");
// fifoArray.push("printer");
// fifoArray.push("monitor");
// access and remove the first value from the array using shift()
// let first=fifoArray.shift()
// let Second=fifoArray.shift()
// let third=fifoArray.shift()
// console.log(first)
// console.log(Second)
// console.log(third)

//!question:14

// let last=[]
// last.push("keyboard");
// last.push("mouse");
// last.push("pointer");

//  let first=last.pop()
//  let Second=last.pop()
//  let third=last.pop()

//  console.log(first)
// console.log(Second)
// console.log(third)

//! QUESTION NO 15
// const phoneManufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];

// document.write('<select>');
// document.write(`<option value="${phoneManufacturers[0]}">${phoneManufacturers[0]}</option>`);
// document.write(`<option value="${phoneManufacturers[1]}">${phoneManufacturers[1]}</option>`);
// document.write(`<option value="${phoneManufacturers[2]}">${phoneManufacturers[2]}</option>`);
// document.write(`<option value="${phoneManufacturers[3]}">${phoneManufacturers[3]}</option>`);
// document.write(`<option value="${phoneManufacturers[4]}">${phoneManufacturers[4]}</option>`);
// document.write(`<option value="${phoneManufacturers[5]}">${phoneManufacturers[5]}</option>`);
// document.write('</select>');

//? ------------------------------chapter 17to20-----------------------------------------
//! QUESTION NO 1
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays).
// code
// var emptyArr=[]

//! QUESTION NO 2
// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// var multidimensional=[[1,0,1,2],[2,1,5,7],[,2,4,6,7],[9,6,4,3]]
// console.log(multidimensional)

//! QUESTION NO 3
// 3. Write a program to print numeric counting from 1 to 10
// for(let i=1; i<=10; i++){
//     console.log(i)
// }

//! QUESTION NO 4
// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// code:
// var table=+prompt("Enter a table number ")
// var n=+prompt("Enter a table length")
// for(i=1; i<=n; i++){
//     console.log(table + "X" + i + " = " + (table*i));

//! QUESTION NO 5
// 5. Write a program to print items of the following array
// using for loop:
// code:
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// for (var i=0; i<=fruits.length; i++){
//     console.log("Element at index"+ " " + i +" "+fruits[i]);
// }

//! QUESTION NO 6

// 6. Generate the following series in your browser. See
// example output.
//? a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// code:
// for(let i=1; i<=15; i++){
//     console.log(i)
// }
//? b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// code
// for(let i=10; i>=1; i--){
//     console.log(i)
// }
//? c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// code:
// for(let i=1; i<=20; i++){
//     if(i%2 == 0){
//         console.log()
//     }
// }
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// for(let i=1; i<=20; i++){
//     if(i%2 !== 0){
//         console.log(i)
//     }
// }
//? e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// code:
// for(let i=1; i<=20; i++){
//     if(i%2 == 0){
//         console.log(i+"k")
//     }
// }

//! QUESTION NO 7

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
// code:
// var bakeryItem = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user = prompt("Check the item available in object or not");
// console.log("user input", user);

// var isMatch = false;

// for (var i=0; i < bakeryItem.length; i++) {
//   if (bakeryItem[i] === user) {
//     isMatch = true
//     console.log(user + " "+ "is available at index" + i + " in our bakery");
//     break;
//   }
// }
// if (isMatch === false) {
//     console.log("We are sorry")
// }
//! QUESTION NO 8

// var arr = [24 , 53 , 78 , 91 , 12];
// var smallest = arr[0];
// document.write("<h1> Array Items:" + arr + " </h1>")

// for(var i = 1 ; i < arr.length; i++){
//     if(arr[i] < smallest) {
//         smallest = arr[i];
//     }
// }
// document.write("<h1>The Smallest number is " + smallest)



//! QUESTION NO 9

// var arr = [24 , 53 , 78 , 91 , 12];
// var largest = 0 ;
// document.write("<h1> Array Items:" + arr + " </h1>")

// for(var i = 0 ; i < arr.length; i++){
//     if(arr[i] > largest) {
//         largest = arr[i];
//     }
// }
// document.write("<h1>The Largest number is " + largest)




//! QUESTION NO 10

// 10. Write a program to print multiples of 5 ranging 1 to 100

// for(let i=0; i<=100; i++){
//     if(i%5 === 0){
//     console.log(i)
//     }
// }