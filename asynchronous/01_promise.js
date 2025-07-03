// creating a promise
/*
const pro = new Promise(
  function (resolve, reject) {
    setTimeout(() => {
      const err = true;
      if (!err) {
        console.log("hello");
        resolve("issue resolved");
      }
      else {
        reject("rejected");
      }
    }, 2000)
  }
)

pro.then(data => {
  console.log("end1");
  console.log(data);
  console.log("end2");
}).catch(err => console.log(err));

*/

// before this .then() we had XMLHTTPRequest method. This is old way of working with asynchronous code


// These days asynchronous code is handled by .then or async/await.

// due to lot of .then() chaining it is adviced to use async/await for asynchronous operations like fetching data from APIs, here fetch helps in network reuqest.

//  ================= PROMISE ===================

// promise is a object that gets some value in future. Present it has no value, when we get data from fetch that is stored in that promise

// fetch("https://api.example.com/data")        // returns a Promise
//   .then(response => response.json())         // returns another Promise with JSON data
//   .then(data => console.log(data));          // finally, data is available


// we acn also do this by async/await in a cleaner way

// async function getPromise() {
//   const val = await fetch("https://randomuser.me/api/");
//   const data = await val.json();

//   console.log(data);

//   const name = data.results[0].name;

//   console.log(name);
// }

// getPromise();


// here we can see that fetch has catch block that gets activated when there is an error. But for async/awiat there is no such thing, so we should use try-catch manually as shown here


async function getPromiseTwo() {
  try { 
    const val = await fetch("https://randomusr.me/api/"); // here i have removed e from randomuser to check if catch block is working or not
    const data = await val.json();

    console.log(data);

    const name = data.results[0].name;

    console.log(name);
  }
  catch(error){
    console.log("Error: ", error);
  }
  
}

getPromiseTwo();