## Event Loop in Javascript

Javascript is **synchronous** i.e. code is executed line by line. But it **can also work asynchronously**. 

Here asynchronously means the the code that takes times. For example, getting data from external APIs. Some may get data fast, some may take time. So for this we use fetch/then or async/await or XMLHTTPRequest.


Javascript is light weight, functionalities like fetch, setTimeOut, setInterval, DOM related like querySelector, eventListeners, canvas related, audio related.. all these come from web APIs like fetch API, timer API etc. In case of node JS we have http, file related, etc in node API. 




**EVENT LOOP**

-In javascript event loop we have call stack, web API handlers, callback queue (macrotask queue), microtask queue

1) first the code is sent to call stack

2) If it is part of web API example setTimeOut, then it is sent to web API handler and setTimeOut is taken out of call stack. web API checks the time that is mentioned in setTimeOut. It waits for x seconds and gives the call back to the callback queue. 

3) If it is promise or MutationObserver or queueMicrotask then after resolving , it is given to microtask queue.


event loop works with given order

**call stack empty ---> microtask queue empty ---> macrotask queue empty**

preference is given to call stack everytime, then microtask queue then callback queue.

Example Code: 

```javascript
console.log("1");

setTimeout(() => {
  console.log("2");   // Callback Queue
}, 0);

Promise.resolve().then(() => {
  console.log("3");   // Microtask Queue
});

console.log("4");
```

This code gives 1432 as result



*Below is strcutured explaination of what is present on the top by chatGPT*

# 🧠 Event Loop in JavaScript

JavaScript is **single-threaded** and **synchronous** by default, meaning it executes code **line by line**.

However, it can also handle **asynchronous operations** like:
- Fetching data from APIs
- Delays (`setTimeout`)
- User interactions (`click`, `scroll`)
  
This is possible due to the **Event Loop**, **Web APIs**, and **task queues**.

---

## 🌐 What Are Web APIs?

JavaScript itself is lightweight. So functionalities like the following are **provided by the browser**, not by the JavaScript engine:

| Feature             | Web API Provided |
|---------------------|------------------|
| `setTimeout`        | Timer API        |
| `fetch`             | Fetch API        |
| `addEventListener`  | DOM API          |
| `canvas`, `audio`   | Multimedia APIs  |

> In **Node.js**, equivalent functionality is provided by **Node APIs** like `fs`, `http`, `timers`, etc.

---

## 🔄 Event Loop Components

- **Call Stack**: Executes synchronous code.
- **Web APIs**: Handle async functions (`setTimeout`, `fetch`, etc.).
- **Callback Queue** (Macrotask Queue): For `setTimeout`, `setInterval`, DOM events.
- **Microtask Queue**: For `Promise.then`, `MutationObserver`, `queueMicrotask`.

---

## 🔁 How the Event Loop Works

1. Execute all code in the **Call Stack** (synchronous).
2. Check **Microtask Queue**:
   - If not empty, execute all microtasks (in order).
3. If Microtask Queue is empty, take the first task from the **Callback Queue** (macrotask).
4. Repeat from Step 1.

> **Microtasks are always given priority over macrotasks**.

---

## 🧪 Example Code

```javascript
console.log("1");

setTimeout(() => {
  console.log("2");   // Macrotask (Callback Queue)
}, 0);

Promise.resolve().then(() => {
  console.log("3");   // Microtask Queue
});

console.log("4");
