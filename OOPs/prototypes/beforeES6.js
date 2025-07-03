/*
  The below method is used as class and object. this is called as constructor function.

  function User(name, age){
  this.name = name;
  this.vayasu = age;

  // console.log(name);
  // console.log(this.name);
  // console.log(this.vayasu);
  // console.log(age);
  console.log(this);
  return this;
}


== here this refers to the global object. 

if u do this inside that function 
console.log(this);
u will get global object with name and age added


if we do this
const student = new User("abc", 18);
a new instance is created and here we get only name and age

if new instance is not created we will get whole object
User("bhavya", 19);

*/

function User(name, age){
  this.name = name;
  this.vayasu = age;

  // console.log(name);
  // console.log(this.name);
  // console.log(this.vayasu);
  // console.log(age);
  console.log(this);
  return this;
}

User.prototype.greet = function (){
  console.log('hello');
}
User.sayHello= ()=>{
  console.log("hellooooo");
}

// console.log(User);
// console.log(this);
// console.log(User.prototype);
// User("bhavya", 19);
// User("bhavya", 19).greet();
console.log(User("bhavya", 19).name);;

const student = new User("abc", 18);
student.greet();
User.prototype.greet();
console.log(student.name);
// student.sayHello();

// console.log(student);
// console.log(student.prototype);
// console.log(student.__proto__);
// student.greet()

// student.prototype.secondGreet = function(){
//   console.log("second hello");
// }

// student.secondGreet();

// const child = new student("asd", 14);
// child.secondGreet();