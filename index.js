//Task1 SUM
let number = Number (prompt("Enter the first number"));
let number1 = Number (prompt("Enter the secand number"));


if (number1==number){
    console.log((number1+number)*3);
    
} else{

    console.log(number1+number);
}


//Task2 Stars

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);


//Task3 Positive OR Negative
let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the secand number");
if (num1>0) {
    console.log("positive")
}else{
    console.log("negative")
}
if (num2>0) {
    console.log("positive")
}else{
    console.log("negative")
}


// //Task4
// function reverse_a_number(n) {
//     var n = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         n += str[i];
//     }
//     return n;
// }
// console.log(reverseString(prompt("you can reverse your number")));

//Task5
function reverse_a_number(n)
{

	return n.split("").reverse().join("");
}
console.log(reverse_a_number(prompt("you can reverse your number")));

