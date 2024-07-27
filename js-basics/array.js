/*
let name = "Naresh";
let email = "nareshtharu.info@gmail.com";
let address = "Kathmandu";
let phone= 9868058070;
*/

/**
 * Elements are stored in index value pair
 * index always begins from 0
 * every elements in an array are being separated by comma,
 * an array can stored any data type
 * 0            1         2
 * [element1, element2, element3, .....]
 *
 */

/*
let user_1 = ["Naresh", "nareshtharu.info@gmail.com", "Kathmandu", 9868058070]
let user_2 = ["nareshtharu.info@gmail.com","Naresh" , "Kathmandu", 9868058070]
// let user_1_1 = new Array()

console.log(user_1[0]) //Naresh
console.log(user_1[1]) //nareshtharu.info@gmail.com
console.log(user_1[2])//Kathmandu
console.log(user_1[3])//9868058070


console.log(user_2[0]) //nareshtharu.info@gmail.com
console.log(user_2[1]) //Naresh
console.log(user_2[2]) //Kathmandu
console.log(user_2[3]) //9868058070

let user_obj_1= {
  name:"Naresh",
  email:"nareshtharu.info@gmail.com",
  address:"Kathmandu",
  phone:9868058070
}

let user_obj_2= {
  email:"nareshtharu.info@gmail.com",
  address:"Kathmandu",
  phone:9868058070,
  name:"Naresh",
}

console.log(user_obj_1.name);
console.log(user_obj_2.name)

let imagesExts = ["jpg", "jpeg", "png", "gif", "svg", "webp"];
let ext = "jpg";
*/

/**Object */

const product_1 = {
  name: "Product one",
  price: 1000,
  discount: 10,
  category: "cat 1",
};
const product_2 = {
  name: "Product two",
  price: 2000,
  discount: 15,
  category: "cat 2",
};

const allProducts = [
  {
    name: "Product one",
    price: 1000,
    discount: 10,
    category: "cat 1",
  },
  {
    name: "Product two",
    price: 2000,
    discount: 15,
    category: "cat 2",
  },
  {
    name: "Product three",
    price: 3000,
    discount: 5,
    category: "cat 3",
  },
];

// console.log(allProducts[0].name);
// console.log(allProducts[0]["name"]);
// console.log(allProducts[0]["price"]);
// console.log(allProducts[1].name);

/**
 * Create an array of objects to store the profile of students,
 * Your object dat should contain name, email, address, phone, college name
 * Your array should contain at least 10 no. of students.
 *
 *
 * Print in the following format:
 * Student name:...............
 * Student Address:..............
 * Student Phone: ..............
 * Student Email:...........
 * Student College Name:............
 */


/*
const students = [
  {
    name: "student one",
    email: "stdone@gmail.com",
    address: "address 1",
    phone: 9877777777,
    college: "College one",
  },
  {
    name: "student two",
    email: "stdtwo@gmail.com",
    address: "address 2",
    phone: 9877777777,
    college: "College two",
  },
  {
    name: "Student three",
    email: "stdthree@gmail.com",
    address: "address 3",
    phone: 9868077777,
    college: "College three",
  },
  {
    name: "student four",
    email: "stdfour@gmail.com",
    address: "address 4",
    phone: 1234567890,
    college: "College four",
  },
  {
    name: "student five",
    email: "stdfive@gmail.com",
    address: "address 5",
    phone: 1234567890,
    college: "College five",
  },
  {
    name: "student six",
    email: "stdsix@gmail.com",
    address: "address 6",
    phone: 1234567890,
    college: "College six",
  },
  {
    name: "student seven",
    email: "stdseven@gmail.com",
    address: "address 7",
    phone: 1234567890,
    college: "College seven",
  },
  {
    name: "student eight",
    email: "stdeight@gmail.com",
    address: "address 8",
    phone: 1234567890,
    college: "College eight",
  },
  {
    name: "student nine",
    email: "stdnine@gmail.com",
    address: "address 9",
    phone: 1234567890,
    college: "College nine",
  },
  {
    name: "student ten",
    email: "stdten@gmail.com",
    address: "address 10",
    phone: 1234567890,
    college: "College ten",
  },
];

console.log(`Student Name: ${students[0].name}`);
console.log(`Student email: ${students[0].email}`);
console.log(`Student address: ${students[0].address}`);
console.log(`Student phone: ${students[0].phone}`);
console.log(`Student college: ${students[0].college}`);

console.log("");
console.log("");


console.log(`Student Name: ${students[1].name}`);
console.log(`Student email: ${students[1].email}`);
console.log(`Student address: ${students[1].address}`);
console.log(`Student phone: ${students[1].phone}`);
console.log(`Student college: ${students[1].college}`);

console.log("")
console.log("")


console.log(`Student Name: ${students[2].name}`);
console.log(`Student email: ${students[2].email}`);
console.log(`Student address: ${students[2].address}`);
console.log(`Student phone: ${students[2].phone}`);
console.log(`Student college: ${students[2].college}`);

console.log("")
console.log("")

console.log(`Student Name: ${students[3].name}`)
console.log(`Student Email: ${students[3].email}`)
console.log(`Student Address: ${students[3].address}`)
console.log(`Student Phone: ${students[3].phone}`)
console.log(`Student College: ${students[3].college}`)

console.log("")
console.log("")


console.log(`Student Name: ${students[4].name}`)
console.log(`Student Email: ${students[4].email}`)
console.log(`Student Address: ${students[4].address}`)
console.log(`Student Phone: ${students[4].phone}`)
console.log(`Student College: ${students[4].college}`)

console.log("")
console.log("")


console.log(`Student Name: ${students[5].name}`)
console.log(`Student Email: ${students[5].email}`)
console.log(`Student Address: ${students[5].address}`)
console.log(`Student Phone: ${students[5].phone}`)
console.log(`Student College: ${students[5].college}`)

*/


const allUsers =[]; //empty

/**
 * Insert data allUsers
 * a. at last/end
 * b. at top/first
 * c. at any position
 */

const user1={
  name:"user one",
  email:"user@one.com",
  address:"Kathmandu"
}

const user2={
  name:"user two",
  email:"user@two.com",
  address:"Lalitpur"
}


//last position
allUsers.push(user1, user2)
// console.log(allUsers)

//allUsers => 2 data
// [0 index, 1 index]

//first position
allUsers.unshift(user2);
// console.log(allUsers)

//any
//[0, 1, 2]