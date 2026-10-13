//even or odd number
// function checkEvenOdd(num) {
//     if (num % 2 === 0) {
//         console.log(num + " is Even");
//     } else {
//         console.log(num + " is Odd");
//     }
// }


// checkEvenOdd(10);  
// checkEvenOdd(7);   

//temperature check
// let temperature = (temp)=>{
//     if(temp>=30){
//         console.log("Hot");
//     }
//     else{
//         console.log("cold");
//     }
// }

// temperature(23);
// temperature(40);

//1
// let num = Number(prompt("Enter a number:"));

// if (num % 3 === 0) {
//     console.log("Number is divisible by 3");
// } else {
//     console.log("Number is not divisible by 3");
// }

//2
// let num = Number(prompt("Enter a number:"));

// if (num % 5 === 0) {
//     console.log("Number is divisible by 5");
// } else {
//     console.log("Number is not divisible by 5");
// }

//3
// let value = true;

// if (value === true || value === false) {
//     console.log("Boolean value");
// } else {
//     console.log("Not a Boolean value");
// }

//4
// let year = prompt("Enter a year:");

// if (year % 400 === 0) {
//     console.log("Leap Year");
// } 
// else if (year % 100 === 0) {
//     console.log("Not a Leap Year");
// } 
// else if (year % 4 === 0) {
//     console.log("Leap Year");
// } 
// else {
//     console.log("Not a Leap Year");
// }

//5
// let num = prompt("Enter a number:");

// if (num > 0) {
//     console.log("Positive Number");
// } else if (num < 0) {
//     console.log("Negative Number");
// } else {
//     console.log("Zero");
// }

//6



let grade = (marks)=>{
    if (marks >= 90) {
    console.log("Grade A");
    } else if (marks >= 80) {
        console.log("Grade B");
    } else if (marks >= 70) {
        console.log("Grade C");
    } else if (marks >= 60) {
        console.log("Grade D");
    } else if (marks >= 40) {
        console.log("Grade E");
    } else {
        console.log("Fail");
    }
}

grade(30);
grade(95);


