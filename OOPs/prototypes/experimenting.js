// ================== Declaring methods in prototype ===============

// Object.prototype.normalLength = function (){
//   return this.length;
// }

// Object.prototype.trimmedLength = function (){
//   return this.trim().length;
// }

// const name = "bhavya      ";

// console.log(name.normalLength());
// console.log(name.trimmedLength());

// console.log(Object.prototype);

// ==============================================

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log("good morning");
  }
}

class student extends person {
  constructor(name, age, rollno) {
    super(name, age)
    this.roll = rollno;
  }

  sayHello() {
    console.log("hello");
  }
}

console.log(person.prototype);

// browser output

// {greeting: ƒ}
// constructor
// : 
// class person
// greeting
// : 
// ƒ greeting()
// [[Prototype]]
// : 
// Object
console.log(student.prototype);

// browser output

// person {sayHello: ƒ}
// constructor
// : 
// class student
// sayHello
// : 
// ƒ sayHello()
// [[Prototype]]
// : 
// Object
// constructor
// : 
// class person
// greeting
// : 
// ƒ greeting()
// [[Prototype]]
// : 
// Object

const s1 = new student("bhavya", 19, 208);
// console.log(s1.name);
// console.log(s1.age);
// console.log(s1.roll);
// s1.greeting()


// console.log(s1.__proto__ === student.prototype);
// console.log(Object.getPrototypeOf(s1) === student.prototype);

// Object.getPrototype() is same as .__proto__

// console.log(student.prototype.__proto__ === person.prototype);

// console.log(Object.getPrototypeOf(s1));

student.prototype.greeting();

// =======================================================================