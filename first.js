// let num = 100;
// let ans = Math.sqrt(num);
// console.log(ans);

// ----------------------------------------
// let randomNumber = Math.round(Math.random()*10);
// console.log(randomNumber);

// let dat = new Date();
// console.log(dat);


// -------------------------------------------
var today = new Date();

var year = today.getFullYear();
var month = today.getMonth() + 1; // Adding 1 because the getMonth() method returns zero-based months (0-11)
var dayOfMonth = today.getDate();
var dayOfWeek = today.getDay(); // Returns the day of the week as a number (0-6), where Sunday is 0 and Saturday is 6

console.log("Year:", year);
console.log("Month:", month);
console.log("Day of the Month:", dayOfMonth);
console.log("Day of the Week:", dayOfWeek);


// -----------------------------------

var today = new Date();
today.setFullYear(2022);
today.setMonth(11); // Note that months are zero-based, so December is represented by 11
today.setDate(31);

console.log(today);


// --------------

const birthday = new Date("1994-12-31"); // YYYY-MM-DD format
console.log(birthday);

