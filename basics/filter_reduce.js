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


console.log(arr.filter((item)=>item>2));
// console.log(greet.filter((item)=>item==='o'));  // this does not work. filter does not work on strings

console.log(greet.split(''));
// [
//   'h', 'e', 'l', 'l',
//   'o', 'o', 'o', 'o',
//   'o', 'o', 'o', 'o'
// ]

console.log(greet.split('').filter((alpha)=>alpha==='o'));



// REDUCE


console.log(arr.reduce((prev, curr)=>prev+curr,0));

console.log(arr.reduce((acc, curr)=>{
  console.log(`acc: ${acc} --- curr: ${curr}`);
  return acc+curr;
},0));