/**
 * Decision making statement
 *  - if-else
 *  - else if
 *  - switch case
 * Iteration or Loop
 *  - do while loop
 *  - while
 *  - for
 *  - for of
 *  - for in
 */

let x = 10;
if (x >= 10) {
  console.log("X is greater than or equal to 10");
} else {
  //optional
  console.log("X is less than 10");
}

//nested if else
const day = "Friday";
if (day === "Saturday") {
  console.log("Holiday");
} else {
  if (day === "Friday") {
    console.log("Weekend");
  } else {
    console.log("Weekday");
  }
}

//else if
if (day === "Saturday") {
  console.log("Holiday");
} else if (day === "Friday") {
  console.log("Weekend");
} else {
  console.log("Week Day");
}

/**
 * Create an object named student
 * assigning name, email, marksObt as number to the object
 * calculate percentage if totalScore is 500
 * print the division based on percentage
 * Given,
 * percentage =>=80 => Distinction
 * percentage >=60 but <80 => First Division
 * percentage >=45 but <60 => Second Division
 * percentage >=35 but <45 => Third Division
 * percentage <35 but ==> Sorry you are failed
 */

const student = {
  name: "Naresh Tharu",
  email: "nareshtharu.info@gmail.com",
  marksObt: 380,
};

const percentage = (student.marksObt / 500) * 100;
console.log(percentage);
if (percentage >= 80 && percentage <= 100) {
  console.log("Distinction");
} else if (percentage >= 60 && percentage < 80) {
  console.log("First Division");
} else if (percentage >= 45 && percentage < 60) {
  console.log("Second Division");
} else if (percentage >= 35 && percentage < 45) {
  console.log("Third Division");
} else {
  console.log("Sorry!! You are failed");
}


/**Task
 * Calculate total bill to be paid by a house hold if electricity consumed for a month is 350 units.
 * Given:
 * - for the first 20 units, a lumpsum amount of NPR. 80 has to be paid
 * - for the next 20 units the rate is Npr. 5/unit
 * - for the next 30 units, the rate is NPR. 7/unit
 * - for the next 50 units, the rate is NPR. 10/unit
 * - for the next 100 units, the rate is NPR. 15/unit
 * - any units above this, the rate is NPR. 20/unit
 * 
 */


/*logic

20 => 80 => 330 unit
20 => 20*5 => 310 unit
30 => 30*7 => 280 unit
50 => 50*10 => 230 unit
100 => 100*15 => 130 unit
130 => 130*20 => 0 unit

*/



/**Task:2
 * Calculate
 * a. Annual Salary after Tax
 * b. Monthly Salary after Tax
 * c. Annual Tax to be paid
 * d. Monthly Tax to be paid
 * Consider a software developer earns NPR. 5000000 yearly before tax.
 * Given the tax brackets
 * if annual income is less than 500000 => tax = 1%
 * if annual income is 200000 more, => tax => 15%
 * if annual income is 300000 more, => tax => 20%
 * if annual income is 1000000 more, => tax => 25%
 * if annual income is 15000000 more, => tax => 30%
 * above any of the mentioned, more => tax 36%
 */