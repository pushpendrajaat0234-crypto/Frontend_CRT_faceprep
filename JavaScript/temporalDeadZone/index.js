//temporal dead zone
console.log(marks);
console.log("Pushpendra");
console.log("jaat");
const marks = 100; // yaha tak hum marks ko access nhi kr sakte ishi ko temporal dead zone kathe hai
console.log(marks);




//block scope
// {
//     var height = 5.9; 
//     console.log(height*2);
// }
// console.log(height); //var k case m hoga waki kisi or m nhi hoga

// {
//     let height = 200;
// }
// console.log(height); //yaha nhi kr sakte

//function scope
// function sayHello(){
//     var name = "vicky";
//     console.log("hellow", name);
// }
// sayHello();

// console.log(name); //this var is only usable inside the function




//global scope
// var age =  20;
// console.log(age);
// if(age>0){
//     console.log(age);
// }
// {
//     console.log(age);
// }
// for(let i = 0; i<3; i++){
//     console.log(age);
// }

// function ask(){
//     console.log("Hi is your age:", age,"?");
// }
// ask();