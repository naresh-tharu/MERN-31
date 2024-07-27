"use strict";
/**
 * a. Mathematical Operator
 * +, -, *, /, %
 *
 * b. Increment or Decrement Operator
 * ++, --
 *
 * c. String //Concatenation Operator
 * +
 *
 * d. Assignment Operator
 * =, +=, -=, *=, /= %=
 *
 * e.   Comparison Operator
 * <, >, <=, >=, ==, !=, ===, !==
 *
 * f. Logical Operator
 * &&, ||, !
 *
 * g. Conditional or Ternary Operator
 * (exp)? true: false
 *
 * h. Template Literal
 * `${}`
 *
 * i. Spread and Rest Operator
 * ...
 *
 * j. Object Destructure
 * declarationTyep {keys, ...rest} =objectData
 */
let num1 = 10;
let num2 = 3;
let div = num1 / num2;
console.log(div); //3.3333333333333335
let modDiv = num1 % num2;
console.log(modDiv); //1 remainder
/**Increment */
let a = 10;
a = a + 1; //a => prev of a+1 assign to a
console.log(a); //11
a++; //a=a+1
console.log(a); //12
++a; // a= a+1  => 13
console.log(a++); //print => assign => increment =>13
// a=14
console.log(++a); //15 //increment=> assign =>print
//+ => String Concatenation Operator
let x = 10;
let y = "10";
let sum = x + y;
console.log(sum); //1010
/*
all are same

let b:number = 10;
b = b+1;
b++
++b
b+=1
*/
let firstname = "Naresh ";
let lastName = "Tharu";
// let fullName:string = firstname + lastName;
firstname += lastName; //firstname = firstname + lastname
console.log(firstname); //Naresh Tharu
let emailTemplates = "Dear Sir <br/> Thank you for your registration.";
emailTemplates += "Please click the click below to activate your account.";
console.log(emailTemplates);
/**Comparison Operator */
let ab = 10;
let bc = "10";
// console.log(ab<=bc); //in javascript => true
// console.log(ab==bc) //in javascript => true
// console.log(ab===bc) //in javascript => false
// console.log(ab!==bc) // in javascript = true
// console.log(ab!=bc);//in javascript => false
/**Logical Operator */
let n1 = 10;
let n2 = 20;
console.log((n1 <= n2) && (n1 === n2)); //false
console.log((n1 === n2) || (n1 <= n2)); //true
console.log(!(n1 >= n2)); //true
/**Conditional or Ternary Operator */
console.log((n1 > 10) ? "n1 is greater than 10" : "n1 is less than or equal to 10");
/**Template Literal */
let number1 = 123;
let str = `Hello!, this is a number: ${number1}`;
console.log(str);
/**Spread and Rest Operator */
const studentsName = ["Student One", "Student Two"];
const students = [
    ...studentsName,
    "Student Three"
];
console.log(students);
const user = {
    name: "Naresh Tharu",
    email: "nareshtharu.info@gmail.com",
    address: "Kathmandu"
};
const admin = Object.assign(Object.assign({}, user), { trainer: "MERN", role: "trainer" });
// const address = admin.address;
// const email = admin.email
//object destructure
const { email, address } = user;
console.log(email); //email
console.log(address); //address
console.log(admin);
let user1 = {
    name: "Naresh"
};
const user2 = user1;
const user3 = Object.assign({}, user1);
console.log(user1); //Naresh
console.log(user2); //Naresh
// user2.name = "updated name"
console.log(user1); //updated name
//user2 changes ==> reflects user1
user3.name = "test name";
console.log(user1); //Naresh
