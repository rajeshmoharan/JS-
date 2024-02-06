// console.log("Rajesh JavaScript Master");
// "use strict";

// const accountId = 1235
// console.log(accountId)

// let accountEmail = "rajesh@gmail.com"
// let accountPassword ="rajesh@"

// console.table([accountId,accountEmail,accountPassword])

// boolean value => true or false
// bigint
// undefined
// Integer
// null

// object

// console.log(typeof undefined);

// let score = 80;

// console.log(typeof score);

// let str1 = "hello";

// let str2 = " Rajesh";

// let str3 = str1 + str2;
// console.log(str3);

// console.log("1"+1);

//  console.log(2>1);

// if (2>1){
//     console.log("good");
// }

// console.log(undefined == 0);

// console.log(null >= 0);

// console.log(null == 0);
// console.log(null > 0);

// const num = 80.9;
// console.log(`Number is :${num}`);

// const score = 100;
// const isLoggedIn = false;
// const outsideTemp = null;

//stack(primitive value) heap(non primitive value);
// in stack we user varibale name to access and in heap we use reference to access

// let str = "    bca    ";
// console.log(str.trim());

// console.log(str.toUpperCase());

// nums and maths

// const score = 400;

// const scoreNumber = new Number(2000);
// console.log(scoreNumber);

// console.log(scoreNumber.toString());

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// console.log(Math.random().toFixed(2));

// let newDate = new Date();
// console.log(newDate.toLocaleDateString());

// console.log(Date.now().toLocaleString());

// const date = new Date();
// console.log();

// {} -curly braces
// [] - square brakets
// () - parantheses

// const arr = ["Rajesh",1,2,34];

// for (let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

const heros = ["iron", "saktiman", "captail america", "spiderman"];

const indian_heros = ["saktiman", "murli"];

// const arr1 = heros.push(indian_heros);

// console.log(heros.push(indian_heros));

// heros.push(indian_heros);
// console.log(heros);

// console.log(arr1);

// heros.concat(indian_heros);
// console.log(heros);

// const newArr = [...heros,...indian_heros];

// console.log(newArr);

// function sum(...theArgs) {
//     let total = 0;

//     for(let arg of theArgs){
//         // console.log(total+=arg);
//         total += arg;
//     }

//     return total;
//   }

//   console.log(sum(1, 2, 3));
// Expected output: 6

//   console.log(sum(1, 2, 3, 4));
// Expected output: 10

// const array = [12,5,3,[5,9,7],[5,[57,8,9]]];

// const new_array = array.flat(1);

// console.log(new_array);

// console.log(Array.isArray(array));

// let mark1 = 80;
// let mark2 = 90;
// let mark3 = 95;
// let mark4 = 99;

// const arr = Array.of(mark1,mark2,mark3,mark4);

// console.log(Array.of(mark1,mark2,mark3,mark4));

// console.log(Array.isArray(arr));

// const Juser = {
//   name : "rajesh",
//   age : 24,
//   course : "MCA",
//   courseFee : 80000
// }

// const data = Juser.age = 50;

// console.log(data);

// Juser.name = "RAJESH";

// // console.log(Juser.name);

// // console.log(Object.keys(Juser));

// const arr = Object.keys(Juser);

// // console.log(arr);

// // for (let i=0; i<arr.length; i++){
// //   console.log(arr[i]);
// // }

// decontructor object
// const course = {
//   courseName : 'BCA',
//   courseFee : 30000,
//   courseHead : 'Rajesh'
// };

// const {courseHead} = course;

// console.log(courseHead);

// function

// const date = (num1,num2) =>{
//     return num1 + num2;
// }

// const result = date(10,20);

// console.log(result);

// function userDate (num1 , num2){
//       // return num1 + num2;

//       console.log(num1+num2);
// }

// // const result = userDate(50,60);

// userDate(20,30);

// console.log("Result is :",result);

// function userCartData(...num){
//     return num;
// }

// console.log(userCartData(100,200,300));

// if (true){
//   let num = 10;
//   const num1 = 20;
//   var num2 = 5;
// }

// // console.log(num);
// // console.log(num1);
// console.log(num2);

// const addiTion = (num1, num2) => (num1 + num2);

// console.log(addiTion(5,3));

// const printName = () => console.log("Welcome to My Page...");

// printName();

// imidiaet invoke function (ifee)
// this is named ifee
// (function add(num1,num2){
//   console.log(num1+num2);
// })(10,50);

// // unamed ifee
// (() => {
//   console.log('Welcome to unamed ifee function...');
// })();

// const isLoggedIn = true;

// if (isLoggedIn){
//   console.log("Log in Successfully...");
// }
// else{
//   console.log("Log in Failed ....");
// }

// const month = 3;

// switch (month) {
//   case 1:  console.log("January");
//           break;
//   case 2:  console.log("Feb");
//           break;
//   case 3:  console.log("March");
//           break;
//   case 4:  console.log("April");
//           break;

//   default: console.log("Invalid Input try again....");
//     break;
// }

// truthy value or falsy value

// Nullish Coalescing Operator (??) null undefined

// let varOne ;

// varOne = undefined || 50;

// console.log(varOne);

// nullish coalescing operator and ternary operator are two different thing
// loops

// for(let i=0; i<=10; i++){
//   console.log(i);
// }

// let index = 1;

// do {
//     console.log(`Data is : ${index}`); //print the value
//     index ++; //increment
// } while (index <= 10);  //condition

// for of loop
// const arr = [ 2,5,3,7,56,8];

// for(const num of arr){
//   console.log(num);
// }

// for in loop

// const arr = [1,2,3,4,5,67];

// for (const [key,value] in arr) {
//     // console.log(value);
// }

// const arr = ['JS','python','node'];

// arr.forEach((ele) => {
//   console.log(ele);
// })

// const result = arr.reduce((ele) => {
//     // ele = ele + 1;
//     console.log(result);
// })(0,2);

// console.log(result);

// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
//   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
//   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
//   { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
// ];

// const result = books.filter((bk) => {
//       return bk.genre === 'History'
// });

// console.log(result);

// const arr = [3,2,4,5,6,7,1,9,0];

// const resu = arr.reduce((pre ,cur)=> pre + cur );
// console.log(resu);

// const arr1 = [1,2,3,4,5,6,7,9,10];

// const shoppingCart = [
//   {
//       itemName: "js course",
//       price: 2999
//   },
//   {
//       itemName: "py course",
//       price: 999
//   },
//   {
//       itemName: "mobile dev course",
//       price: 5999
//   },
//   {
//       itemName: "data science course",
//       price: 12999
//   },
// ]

// const totalPrice = shoppingCart.reduce((acc,cur) => acc + cur.price,0);
// console.log(totalPrice);

// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
//   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
//   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
//   { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
// ];

// books.map(function(el){
//         if (el.edition>=2010){
//            return el;
//         }
//   })

//   console.log(e);

// const bk = books.filter((bk) => bk.genre === 'History')

// console.log(bk);

// books.map((el) => console.log(el))

// const arr[];

// books.forEach((el) => {
//   if (el.edition > 2010) {
    
//   }
// });

// console.log(arr);


