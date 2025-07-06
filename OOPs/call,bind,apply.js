const person = {
  name: "bhavya",
  age: 20,
  
  greeting: function(){
    console.log("hello ", this.name);
  }
}

const student = {
  name: "karthika"
}

const sayHello = ()=>{
  console.log(this.name);
}

function sayHelloTwo(){
  console.log(this.name, ", Good Morning!");
}

const func = person.greeting;

// func();

// func.call(student)  

// func.apply(student, [])

// difference between call and apply is.. in apply we give arguments as an array. In case of call, context and arguments are just comma seperated.


// ====================== BIND ============================

// bind also does the same thing in extra it returns a function

const newFunc = sayHello.bind(person);

newFunc();

// WARNING: this does not work with arrow function. It already takes the lexical scope and even with bind scope is not changed

const newFuncTwo = sayHelloTwo.bind(person);

newFuncTwo();