let score = 80;
console.log(typeof score);
// console.log(typeof (score));

// "33" => 33
//"33abc" => Nan
let Name = "Gaurav";
let valueInNumber = Number(Name);
console.log(valueInNumber);//Nan
console.log(typeof valueInNumber);//Number
let marks = "33";
let scoreInNumber = Number(score);
console.log(valueInNumber);//Nan
console.log(typeof valueInNumber);//number

let isLoggedIn = "1";//1 => true or 0 => false
let booleanLoggedIn = Boolean(isLoggedIn);
console.log(booleanLoggedIn);

let number = 33;
let numbertoString = String(number);
console.log(numbertoString);//33
console.log(typeof numbertoString);//string