let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.__proto__);

const date = myDate.getDate()
// console.log(date)
// console.log(typeof date)
// console.log(myDate.getDate())
// console.log(myDate.getDay())
// console.log(myDate.getFullYear())
// console.log(myDate.getHours())
// console.log(myDate.getMilliseconds())
// console.log(myDate.getMinutes())
// console.log(myDate.getMonth())
// console.log(myDate.getSeconds())
// console.log(myDate.getTime())  // THIS GIVES MILLISECONDS FROM 1ST JAN OF 1970
// console.log(myDate.getTimezoneOffset())


// console.log(myDate.getUTCDate())
// console.log(myDate.getUTCDay())
// console.log(myDate.getUTCFullYear())
// console.log(myDate.getUTCHours())
// console.log(myDate.getUTCMilliseconds())
// console.log(myDate.getUTCMonth())
// console.log(myDate.getUTCSeconds())

/*
console.log(myDate.toString())  //Wed May 28 2025 16:51:12 GMT+0530 (India Standard Time)

console.log(myDate.toUTCString()) //Wed, 28 May 2025 11:21:12 GMT

console.log(myDate.toISOString()) //2025-05-28T11:21:12.713Z

console.log(myDate.toDateString()) //Wed May 28 2025
console.log(myDate.toTimeString()) //16:51:12 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleString()) //28/5/2025, 4:51:12 pm
console.log(myDate.toLocaleDateString()) //28/5/2025
console.log(myDate.toLocaleTimeString()) //4:51:12 pm
*/

// CREATING DATE

const dateCreated = new Date(2025, 1, 24)
// year, month, date ... here month indexing starts from 0 i.e 0-january

// console.log(dateCreated) ==> this gives UTC time that is coordinated universal time.. 2025-02-23T18:30:00.000Z


/*
2025-02-23
T - indicates time starts from here

console.log(dateCreated.getTimezoneOffset())
this give offset time from this UTC

in our case it is -330 i.e. 5 hours 30 minutes.. so we should add 5 hours 30 minutes to the UTC time to get correct date and time.

console.log(dateCreated.toDateString())
console.log(dateCreated.toTimeString())

these methods give correct inut

default times are 00

*/

// console.log(dateCreated)
// console.log(typeof dateCreated)
// console.log(dateCreated.toDateString())
// console.log(dateCreated.toTimeString())
// console.log(dateCreated.getTimezoneOffset())


const secondDate = new Date(2025, 1, 24, 22, 32)

// console.log(secondDate)
// console.log(typeof secondDate)
// console.log(secondDate.toDateString())
// console.log(secondDate.toTimeString())
// console.log(secondDate.toLocaleString())
// console.log(secondDate.getTimezoneOffset())


// USING DATE FORMATS

// YY-MM-DD
const forDate = new Date("2025-02-24")
// console.log(forDate)
// console.log(typeof forDate)
// console.log(forDate.toDateString())
// console.log(forDate.toTimeString())
// console.log(forDate.toLocaleString())
// console.log(forDate.getTimezoneOffset())

// MM-DD-YY
const for1Date = new Date("02-24-2025")
// console.log(for1Date)
// console.log(typeof for1Date)
// console.log(for1Date.toDateString())
// console.log(for1Date.toTimeString())
// console.log(for1Date.toLocaleString())
// console.log(for1Date.getTimezoneOffset())

// console.log(secondDate.toLocaleString('default', {
//   day: "numeric",
//   month: "long",
//   weekday: "long"
// }))

// console.log(secondDate.toString())