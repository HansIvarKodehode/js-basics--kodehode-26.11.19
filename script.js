// lesson1: intro to JS

//

console.log("hello world");

// string
let exString = "hi";
console.log(exString);

// number
let exNum = 50;
console.log(exNum);

// bool
let exBool = false;
console.log(exBool);

// array
let exArray = [exBool, exNum, exString];
console.log(exArray[1]);
console.log(exArray[2]);
console.log(exArray[0]);

// object
let person = {
  name: "alice",
  age: 25,
  isStident: false,
};
console.log(person);

// undefined (declared var)
let exUndefined;
console.log(exUndefined);

// null
let exNull = null;
console.log(exNull);

// let v const
// I cant be bothered.
// let can change, const can't
// use them as apropriate

// operators
let num1 = 22;
let num2 = 2;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 % num2); // modulus(remainder)

// tying strings together
let s1 = "get";
let s2 = "lost";
console.log(s1 + " " + s2);

// ++
let counter = 0;
let i = 0;
let maxIt = Math.floor(Math.random() * 100) + 1;
console.log(counter, i, maxIt);

for (i; i <= maxIt; i++) {
  counter++;
  console.log("counter = " + counter);
}

// comparison
// again can't be bothered
// use <, >, <=, >=, ==
// === also takes datatyp into account
