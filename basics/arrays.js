const myArry = [0,1,2,3,4,5, true, 'bhavya']
// need not be of same type
// resizable arrays
// when copied it is shallow copy(share same reference)

// console.log(myArry.toLocaleString());
// console.log(myArry.push(6)) // this gives length of array
// console.log(myArry.toLocaleString());
// console.log(myArry.length)
// console.log(myArry.at(5))

// // console.log(myArry.fill(0)); //fills all indexes with zeroes
// myArry.unshift(9); // adds element to the start
// console.log(myArry);
// myArry.shift();  // removes the unshift element
// console.log(myArry);

console.log(myArry);
const newArray = myArry.map(ele => ele*ele);
console.log(newArray);

const fruits = ['apples', 'bananas', 'kiwis', 'guavas', 'grapes']

console.log(fruits.map(ele=> ele.toUpperCase()));

console.log(fruits.filter(ele=>ele.endsWith('p')));

console.log(fruits.every(ele=> ele.endsWith('s')));

console.log(fruits.find(ele=>ele.startsWith('g')));

console.log(fruits.splice(1,2,'mangoes')); //this changes the original array
console.log(fruits);

console.log(fruits.slice(1,2));

const veg = ['carrots', 'beetroots', 'tomatoes'];

console.log(fruits.concat(veg)); // gives an array of both fruits and veg
console.log(fruits);
console.log(veg);
// fruits.push(veg) // veg array is pushed entirely not elements of veg
// console.log(fruits); 

console.log(fruits.join('///'));

console.log(fruits);

console.log(fruits.some(ele=>ele.startsWith('g')));

// console.log(fruits.sort((a,b)=>a.localeCompare(b)));
console.log(fruits.sort((a,b)=>b.localeCompare(a))); // changes original array

console.log(fruits);

fruits.reverse();

console.log(fruits);

console.log([...fruits, ...myArry, ...veg]); // elements in the array are spreaded. new array can be created


const flatArray = [1,2,3,[1,2,3,4,[5,6,7]]]

console.log(flatArray.flat(1)); //[ 1, 2, 3, 1, 2, 3, 4, [ 5, 6, 7 ] ]

console.log(flatArray.flat(Infinity)); 
//[1, 2, 3, 1, 2,3, 4, 5, 6, 7]