// let obj = {
//     name: "Pushpendra",
//     age: 20,
//     weight: 70,
//     conversation: "Ramba Ramba Tumba Tumba Humba Humba",
//     greet: function(){
//         console.log("Hello Dosto, My name is Pushpendra");
//     }
// };

// for(let key in obj){
//     console.log(key," ", obj[key]);
// }

// console.log(obj);
// obj.greet();

//creation of arrays

// let arr = [2,4,5,6,'kal'];
//array constructor
// let brr = new Array('pussy', 20, true);


// console.log(typeof(brr));

// for(let i=0; i<5; i++){
//     console.log(arr[i]);
// }
// console.log(arr[0]);

// arr.push('Ram');
// arr.pop();
// arr.pop();
// arr.shift();
// arr.unshift(true);
// arr.unshift('Radhe Radhe');
// console.log(arr);
// console.log(arr.slice(2,4));
//}

// let arr = [10,20,30,11,23,16,33];

// let ans = arr.filter((number) => {
//     // if(number%2 === 0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }

//     return number%2 === 0;
// });

// console.log(ans);

// let square = arr.map((number) => {
//     return number*number;
// });

// console.log(square);


// let arr = [10,20,30,40];

// let reduce = arr.reduce((acc,curr) => {
//     return acc+curr;
// },0)

// console.log(reduce);


//using forEach
// arr.forEach((value,index) => {
//     console.log("Number:", value, "Index:", index);
// });

// for(let value of arr){
//     console.log(value);
// }


//function with array
let arr = [10,20,30,40];

let getsum = (arr) => {
    let sum = 0;
    let size = arr.length;
    // for(let index=0; index<size; index++){
    //     sum = sum + arr[index];
    // }
    // return sum;

    arr.forEach((value) => {
        sum = sum+value;
    });
    return sum;
}

console.log(getsum(arr));
