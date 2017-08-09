// String

var string = "21a21";

// Boolean

var flag = true;

// number

var age = 27;

// Date

var now = new Date();

// Object

var marco = {
    name: "Marco",
    age: age,
    height: 178,
    ar: [23, 32]
}

marco.altra = "test";

// Array
var numbers = [12, 32, [43, 3]];


var result = numbers.slice(2); // immutable

// var result = numbers.splice(2); // mutable
// numbers.forEach((number, index) => {
//     console.log("number", number, "index", index);
// });

var last = numbers.push("hello")

console.log("marco", marco.altra);

// for (var index = 0; index < numbers.length; index++) {
//     var number = numbers[index];
//     console.log("number", number, "index", index);    
// }
// console.log(result);
// console.log(numbers);