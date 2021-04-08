// require
// importing tut.js file into exp.js
const { people, ages } = require('./tut');
console.log(people, ages);

//there is an inbuilt os.js file in NODE JS
const os = require('os');
console.log(os.platform(), os.homedir());