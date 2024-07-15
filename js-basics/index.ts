console.log("hello! World");

//Variable
//let, var, const

var fullname:string= "Naresh Tharu";
let name1:string = "Naresh Tharu";

console.log(fullname); //Naresh Tharu
console.log(name1); //Naresh Tharu

/**Scope
 * a.   Global Scope
 * b.   Block/local Scope
 * 
 */
var x:number =10;
console.log(x); //10
{
    //block
    var x:number =20;
    console.log(x); //20
}
console.log(x); //20


let y:number = 20; 
console.log(x); //20
{
    let y:number = 10;
    console.log(y); //10
}
console.log(y); //20


//constant
const GRAVITY:number= 9.8;
const PI:null =null;

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

let phone:number = 9e68058070

//string
let a:string="";
let aa:string = '';
let aaa:string = ``;

console.log(typeof a); //string
console.log(typeof aa); //string
console.log(typeof aaa); //string



//number
let b:number =123;
let bb:number = 1.23;
let bbb:number= 1e23;

console.log(typeof b) //number
console.log(typeof bb);//number
console.log(typeof bbb);//number



//Boolean
let c:boolean = true;
let cc:boolean=false;

console.log(typeof c)
console.log(typeof cc);

//Null
let d:null =null;
console.log(typeof d); //object


//undefined
let e:undefined;
console.log(typeof e); //undefined


//array
let arr:[] = [];
console.log(typeof arr); //object


//object
let obj:{} ={};
console.log(typeof obj); //object


//function as data type
let func = function():void{}
console.log(typeof func); //function


// let seteg = new Set(); //error

// let sm :symbol= Symbol(); //error


