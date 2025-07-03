// +++++++ for of loop ++++++++++++++

const arr = [1,2,3,4,5,6]
const greet = "helloooooooo"
const obj = {
  1:"a",
  2:"b",
  3:"c"
}
const objArray = [
  {
    name: "bhavya",
    age: 19
  },
  {
    name: "karthika",
    age: 21
  },
  {
    name: "sunanda",
    age: 43
  },
  {
    name: "kesav",
    age: 50
  }
]
// for (const i of arr) {
//   console.log(i);
// }

// for (const i of greet) {
//   console.log(i);
// }

//  MAP

const myMap = new Map();

myMap.set("first name", "baby bhavya");
myMap.set("last name", "kureti");
myMap.set("age", 19)
myMap.set("age", 19) // stores only unique key value pairs

// console.log(myMap);


// for (const ele of myMap) {
//   console.log(ele);
// }

// for (const ele of myMap) {
//   console.log(ele[0]);
// }

// for (const element of arr) {
//   console.log(element);
// }

// for (const key of objArray) {
//   console.log(key.age);
// }

// +++++++ FOR IN +++++++

// for (const key in objArray) {
//   console.log(key);
// }

//  here for in loop takes the key that means for object it provides all keys. if it is an array it gives indices

for (const key in myMap) {
  // console.log(key);   // nothing is printed as for in does not iterate in map.
}



// ++++++++++++ FOR EACH +++++++++++


// arr.forEach(()=>{

// })

// this is the structure


arr.forEach((item)=>{console.log(item+10)});
// for each does not return anything
// console.log(arr);


objArray.forEach(item => {
  console.log(item);
});

myMap.forEach(item=>console.log(item))