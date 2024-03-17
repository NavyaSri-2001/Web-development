//1. Variables:

// var name = "navya";
// console.log(name);
// // var allows us to redecalre and define
// var name = "divya";
// console.log(name);
// name = "nav";
// console.log(name);

// let city = "knl";
// console.log(city);
// //let allows us only to re define
// city = "hyd";
// console.log(city);

// const age = 20;
// console.log(age);
// //This gives error
// //const does'nt allow to redeclare or redefine
// //age = 25;
// //console.log(age);

// //2. Terneray operator

// let a = 20;
// if (a > 20) {
//   console.log("age greater than 20");
// } else {
//   console.log("age less than or equal to 20");
// }

// let b = 20;

// b > 20
//   ? console.log("age greater than 20")
//   : console.log("age less than or equal to 20");

// //3. Functions

// function abc() {
//   return 10 + 20;
// }

// //function expression
// const sum = function () {
//   return 10 + 30;
// };

// //3. arrow functions
// const addition = () => {
//   return 10 + 40;
// };

// const subtraction = (value) => value - 10;

// console.log(abc());
// console.log(sum());
// console.log(addition());
// console.log(subtraction(20));

// //4. arrays and objects

// //array
// const number = [10, "amit", 1];

// for (let i = 0; i < number.length; i++) {
//   console.log(number[i]);
// }

// //we don't usually use for loop in react, we use map, filter, reduce
// number.map(function (item) {
//   console.log(item);
// });

// const array2 = [10, 20, 30, 40];
// const num = array2.filter(function (item) {
//   if (item > 10) return item;
// });

// console.log(num);

// //Objects

// const person = {
//   name: "amit",
//   age: 20,
//   city: "kurnool",
// };

// console.log(person);
// console.log(person.name);

// //object shorthand assignment
// // we create a variable name with same name as property name inside the object

// // const name2 = "amit";
// // const age2 = 20;

// // const person2 = {
// //   name2: name2,
// //   age2,
// //   city2: "kurnool",
// // };

// //console.log(person2);

// //5. Object destructuing

// const person3 = {
//   name3: "amit",
//   age3: 20,
//   city3: "kurnool",
// };
// // const name3 = person3.name3;
// // const age3 = person3.age3;
// // console.log(name3);
// // console.log(age3);

// const { name3, age3, city3 } = person3;

// console.log(name3, age3, city3);

// //6. Array Destructuring

// const names = ["amit", "ankit", "abhi"];

// const [p1, p2, p3] = names;

// console.log(p1, p2, p3);

//7. Rest and Spread operator

//spread operator
// const person = {
//   name: "amit",
//   age: 20,
//   city: "knl",
// };

// const person1 = { ...person, state: "AP" };

// person1.name = "abhi";
// console.log(person1);
// console.log(person);

// const names = ["nav", "divya", "suma"];

// const names2 = [...names, "kavya"];
// console.log(names);
// console.log(names2);

//Rest Operator
//Rest operator should be the last variable only

// const person = {
//   name: "amit",
//   age: 20,
//   city: "knl",
//   state: "Ap",
//   country: "Ind",
// };

// const { name, age, ...address } = person;

// console.log(name, age, address);

// //8. call back functions

// function add(a, b, cb) {
//   console.log(a + b);
//   cb();
// }

// add(10, 20, function () {
//   console.log("I am callback function");
// });

// const rendom = function () {
//   console.log("I am call back function");
// };

// add(10, 30, rendom);

//9. promises
// promises are used for asynchronous functions
// asynchronous functions means functions which dont follow any order. they run parallely with other functions

// console.log("a");

// setTimeout(function () {
//   console.log("b");
// }, 0);

// console.log("c");

// // Above case, we expect o/p to be a,b,c but o/p is a,c,b becoz setTimeout() is an asynchronous function
// // to get the output as a,b,c we use promises

// const prom = new Promise(function (resolve, reject) {
//   const age = 10;
//   if (age > 10) console.log("qualified");
//   else console.log("not qualified");
// });

// prom
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// // to use promise in our case:

// console.log("A");

// const prom2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("B");
//     resolve();
//   }, 0);
// });

// prom2.then(function (data) {
//   console.log("C");
// });

//10. async and await

// console.log("A");

// const prom = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("B");
//     resolve();
//   }, 0);
// });

// async function exec() {
//   await prom;

//   console.log("C");
// }

// exec();

//11. error handling using try and catch

// console.log("a");

// const prom = new Promise(function (resolve, reject) {
//   reject("I am error");
// });

// async function exec() {
//   try {
//     await prom;
//   } catch (e) {
//     console.log(e);
//   }
// }

// exec();

//13. closure

// function add(a, b) {
//   const sum = a + b;

//   return function () {
//     console.log("I am inner function", sum);
//   };
// }

// const output = add(10, 20);

// output();

//14. Modules:

// // This is named export, where we can expect multiple functions from one file to another
// //indexDb.js

// export function abc() {}

// export function def() {}

// //app.js
// //Here we need to import with same function names as above
// import { abc, def } from "./indexDb";

// abc();
// def();

// //This is default export. where we can export only one function
// //index.js
// export default function abc() {}

// //app.js
// //Here insted of abc we can call it by any name in default export. The name does'nt need to match with function name
// import abc from "./indexDb";
// abc();
