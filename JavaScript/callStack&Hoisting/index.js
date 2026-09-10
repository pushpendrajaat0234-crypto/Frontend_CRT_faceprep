// console.log(a);  //not working because hoisting is only applicable on var or functions
// let a = 4;

// console.log(a);  //yaha var ka declaration top pr move ho gya hai, hoisting ki wajah se
// var a = 4;

// yaha bhi hoisting ho rhi hai
// hello();
// function hello(){
//     console.log("ind bind tikdi tu");

// }

// yaha kaam nhi krega, yaha function declare nhi hua hai.
// greet();
// let greet = function(){
//     console.log("Ram Ram bhai logo");
// }

// var value = 3
// var greet = (value)=>{
//     return value;
// }
// var ans = greet(value);
// console.log(ans);


//functions

let arr = [
    function add(a,b){
        return a+b;
    },
    function sub(a,b){
        return a-b;
    }
];

let ans = arr[0];
console.log(ans(1,6));
