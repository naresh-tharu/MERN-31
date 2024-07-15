console.log("hello! World");
//Variable
//let, var, const
var fullname = "Naresh Tharu";
var name1 = "Naresh Tharu";
console.log(fullname); //Naresh Tharu
console.log(name1); //Naresh Tharu
/**Scope
 * a.   Global Scope
 * b.   Block/local Scope
 *
 */
var x = 10;
console.log(x); //10
{
    //block
    var x = 20;
    console.log(x); //20
}
console.log(x); //20
var y = 20;
console.log(x); //20
{
    var y_1 = 10;
    console.log(y_1); //10
}
console.log(y); //20
//constant
var GRAVITY = 9.8;
var PI = null;
/**Data Types */
/**
 * a. String
 * "", '', ``
 *
 * b. Number
 * integer, float, bigint
 *
 * c. Boolean
 * true, false
 *
 * d. Null
 * null
 *
 * e. undefined
 * f. Array
 * g. Object/JSON
 * h. function
 * i. symbol
 * j. set
 */
var phone = 9e68058070;
//string
var a = "";
var aa = '';
var aaa = "";
console.log(typeof a); //string
console.log(typeof aa); //string
console.log(typeof aaa); //string
//number
var b = 123;
var bb = 1.23;
var bbb = 1e23;
console.log(typeof b); //number
console.log(typeof bb); //number
console.log(typeof bbb); //number
//Boolean
var c = true;
var cc = false;
console.log(typeof c);
console.log(typeof cc);
//Null
var d = null;
console.log(typeof d);
//undefined
var e;
console.log(typeof e);
//array
var arr = [];
console.log(typeof arr);
//object
var obj = {};
console.log(typeof obj);
//function as data type
var func = function () { };
console.log(typeof func);
// let seteg = new Set();
// let sm :symbol= Symbol();
