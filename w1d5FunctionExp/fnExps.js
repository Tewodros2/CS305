"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
//module.exports = { double, times100, myMap , triples, triplesArw}; //add all of your function names here that you need for the node mocha tests

/**
 *@returns {number} double the input
 */
function double(num) {
    return num * 2;
}


/**
 * @returns {number} 100 times the input
 */
function times100(num) {
    return num * 100;
}


/**
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(array, double, times100) {

    let doubleArray = [];
    let hundredArray = [];
    if (double) {
        for (let i = 0; i < array.length; i++) {
            doubleArray[i] = double(array[i]);
        }
        return doubleArray;
    }

    else {
        for (let i = 0; i < array.length; i++) {
            hundredArray[i] = times100(array[i]);
        }
        return hundredArray;
    }
}
let triples = function (array1) {
    return array1 * 3;
};
let triplesArw = array2 => array2 * 3;

module.exports = { double, times100, myMap, triples, triplesArw };
