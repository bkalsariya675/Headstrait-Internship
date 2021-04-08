// modules

const people = ["ABC", "PQR", "LMN", "XYZ"];
const ages = [25, 30,35, 40];
console.log(people);

// module.exports will pass people to imp variable in exp.js 
// and it is used to export something manually from the file
module.exports = {
    people,ages
};