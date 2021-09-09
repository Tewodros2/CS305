"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { ucFirst, getMaxSubSum, checkSpam, truncate, camelize, extractCurrencyValue }; //add all of your function names here that you need for the node mocha tests



function ucFirst(str) {
    if (str === "") return "";
    return str[0].toUpperCase() + str.slice(1);

}

function checkSpam(str) {
    const lowerWord = str.toLowerCase();
    return lowerWord.includes("viagra") || lowerWord.includes("xxx")

}


function truncate(str, maxlength) {
    if (str.length < maxlength)
        return str;
    return str.slice(0, maxlength - 1) + "…";

}
function extractCurrencyValue(str) {

    return Number(str.slice(1));


}




/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partSum = 0;

    for (let item of arr) {
        partSum += item;
        maxSum = Math.max(maxSum, partSum);
        if (partlSum < 0)
            partSum = 0;

    }

    return maxSum;
}



function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        ).join('');
}




