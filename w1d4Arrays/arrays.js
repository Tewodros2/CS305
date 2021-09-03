"use strict";

const { workerData } = require("worker_threads");

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
module.exports = { maxOfThree, sum, multiply, reverseArray, reverseArrayInPlace, scoreExams, findLongestWord };  //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c) {
    if (a > b) {
        if (a > c)
            return a;
        else
            return c;
    }
    else {
        if (b > c)
            return b;
        else
            return c;
    }


}

/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
    let sumTotal = 0;
    for (const number of arr) {
        sumTotal += number;
    }
    return sumTotal;
}


/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr) {
    let multiTotal = 1;
    for (const number of arr) {
        multiTotal *= number;
    }
    return multiTotal;
}
function findLongestWord(word) {
    let longestWordLength = word[0].length;

    for (let i = 0; i < word.length; i++) {
        if (word[i].length > longestWordLength) {
            longestWordLength = word[i].length;
        }
    }
    return longestWordLength;
}



function reverseArray(array) {
    let reversedArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArr.push(array[i]);
    }
    return reversedArr;
}
function reverseArrayInPlace(array) {
    let reversedArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArr.push(array[i]);

    }
    for (let i = 0; i > reversedArr.length; i++) {

        array.push(reversedArr[i]);
    }
    return reversedArr;
}
function scoreExams(studentAnswers, correctAnswers) {
    let studentScore = [];
    for (let singleAnswore of studentAnswers) {
        let answer = 0;
        for (let i = 0; i < singleAnswore.length; i++) {
            if (singleAnswore[i] === correctAnswers[i])

                answer++;
        }
        studentScore.push(answer)

    }
    return studentScore;
}
