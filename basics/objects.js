const id = Symbol();

const obj = {
  name: 'bhavya',
  age: 19,
  "clg ID": "BT23CSE208",
  ["last name"]: 'kureti',
  [id]: 204,
  email: "bhavya@gmail.com"
}

console.log(obj);
/**
 * symbol
 * 
 * we can hide the key.
 * 
 * for this we should first declare a symbol. suppose id should be symbol then you should say 
 * const id = symbol()
 * 
 * we can access it only if we know the key name. students[id] in this way. we cannot access like student.id. else we should use getOwnPropertySymbols to get all symbol values.
 * 
 * this is helpful to hide data.
 */

const s1 = Symbol();
const s2 = Symbol();
const s3 = Symbol();
const s4 = Symbol();

const students = {
  [s1] : 'a',
  [s2]: 'b', 
  [s3]: 'c',
  [s4]: 'a'
}

console.log(students);

const names = Object.getOwnPropertySymbols(students);

console.log(names);

names.forEach(ele=>{
  console.log(students[ele]);
})


console.log(obj["last name"]);
console.log(obj.name);
console.log(obj[id]);
console.log(obj["age"]);

Object.freeze(obj) // there will be no change in the object obj as we have freezed. we can change the values

console.log(obj);

obj.name = 'baby bhavya'
obj.age=20

console.log(obj);


const newObj = {
  name:'baby',
  [id]: 204,

  getId: function(){
    return this[id];
  } 
}

console.log(newObj);

console.log(newObj.getId());



// DESTRUCTURING 

const {name: myname, age: myage} = obj;

console.log(myname);
console.log(myage);