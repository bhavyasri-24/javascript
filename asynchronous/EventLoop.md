## Event Loop in Javascript

Javascript is synchronous i.e. code is executed line by line. But it can also work asynchronously. 

Here asynchronously means the the code that takes times. For example, getting data from external APIs. Some may get data fast, some may take time. So for this we use fetch/then or async/await or XMLHTTPRequest.


Javascript is light weight, functionalities like fetch, setTimeOut, setInterval, DOM related like querySelector, eventListeners, canvas related, audio related.. all these come from web APIs like fetch API, timer API etc. In case of node JS we have http, file related, etc in node API. 




<!-- EVENT LOOP -->

In javascript event loop we have call stack, web API handlers, callback queue (macrotask queue), microtask queue

first teh code is sent to call stack

If it is part of web API example setTimeOut, then it is sent to web API handler and setTimeOut is taken out of call stack. web API checks the time that is mentioned in setTimeOut. It waits for x seconds and gives the call back to the callback queue. 

If it is fetch then after resolving , it is given to microtask queue.


event loop works with given order

call stack empty ---> microtask queue empty ---> macrotask queue empty

preference is given to call stack everytime, then microtask queue then callback queue.
```
console.log("1");

setTimeout(() => {
  console.log("2");   // Callback Queue
}, 0);

Promise.resolve().then(() => {
  console.log("3");   // Microtask Queue
});

console.log("4");```

This code gives 1432 as result
