function greeting(){
  return "hello"
}

console.log(greeting());

function getArgu(...arg){
  return arg;
}

console.log(getArgu(1,2,3,4));

function getArgu1(val, ...arg){
  return arg;
}

console.log(getArgu1(1,2,3,4));

// this type of functions can be accessed before declaration

function addTwo(num){
  return num+2;
}

// this is also function declaration

// const addTwo = function(num){
//   return num+2;
// }

// this type of function cannot be accesed before declaration

console.log(addTwo(2));




// ++++++++++++++++++ ARROW FUNCTION +++++++++++++++

// () => {}

// function add(a, b){
//   return a+b;
// }

// const add = function(a, b){
//   return a+b;
// }

// const add = (a, b) => {
//   return a+b;
// }

const add = (a, b) => (a+b);

// all these represent the same function.

// first declaration is normal

// second declaration uses const key word, it is like declaring a variable. we should use = sign for declaring that value.

// third declaration is arrow function. here we don't use function key word. istead of function key word we use => 

// in fourth declaration if there is only on single return statement there is no need to use return key word instead we can use parenthesis


const giveObj = (a, b) => ({name: "bhavya"})

console.log(giveObj());

// +++++++++++++ IMMEDIATELY INVOKED FUNCTION EXPRESSIONS +++++++++++

// declared in this way 
// ()()

// first bracket will have function definition
// second bracket is execution of function.

// this gets executed immediately without any extra call. it is calling itself


(()=> {
  console.log("first line")
})();

(function hell(){
  console.log("second line");
})()