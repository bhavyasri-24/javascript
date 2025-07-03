class User{
  constructor(name, age){
    this.name = name;
    this.vayasu = age;
  }

  sayHello(){    // part of prototype
    console.log("helloooo");
  }

  static greet(){   // not part of prototype, it is static function
    console.log("hello");
  }
}

// console.log(User("bhavya", 19).name); // not correct 

const student = new User("bhavya", 19);

console.log(student.name);
student.sayHello(); 

// student.greet(); // static method is not accessible
// student.__proto__.greet();  // does not work as greet is not part of prototype of User

User.greet();  // valid

User.prototype.sayHello();