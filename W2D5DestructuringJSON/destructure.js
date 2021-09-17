"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { topSalary }; //add all of your function names here that you need for the node mocha tests


function topSalary(salaries) {
    let nameOfTopSalary;
    let topSalary = -Infinity;
    if (Object.keys(salaries).length === 0)
        return null;

    for (let key in salaries) {
        if (topSalary < salaries[key]) {
            topSalary = salaries[key]
            nameOfTopSalary = key;
        }
    }
    return nameOfTopSalary;
}
