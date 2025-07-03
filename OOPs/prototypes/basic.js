const arr = [1, 2, 3];
arr.__proto__ === Array.prototype; //true
Array.prototype.__proto__ === Function.prototype; // false (prototype is object not function)
Array.prototype.__proto__ === Object.prototype; // true (prototype is an object)
Array.__proto__ === Function.prototype  // true (Array is function)