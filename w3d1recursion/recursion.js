"use strict";

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop }; //add all of your function names here that you need for the node mocha tests

function sumTo(num) {
    if (num < 1)
        return 0;
    else
        return num + sumTo(num - 1);
}

function factorial(num) {
    if (num == 0)
        return 1;
    else
        return num * factorial(num - 1);
}
function fibonacci(num) {
    if (num < 2)
        return num

    else
        return fibonacci(num - 1) + fibonacci(num - 2)
}
function outputList(list, number) {
    if (list == 0)
        return 0;
    else
        return outputList(n - 1)


}

function outputList(list, result = "") {
    if (list === null) {
        return result;
    } else {
        result += list.value + " ";
        return outputList(list.next, result);
    }
}
function outputListLoop(list, result = "") {
    while (list) {
        result += list.value + " ";
        list = list.next;
    }
    return result + "printed to console";
}
function outputList(list, result = []) {
    if (list !== null) {
        result.push(list.value);
        outputList(list.next, result);
    }
    return result.join(" ") + " printed to console";
}




function reverseListLoop(list) {
    let result = [];
    let reverse = "";
    while (list !== null) {
        result.push(list.value);
        list = list.next;
    }
    for (let i = result.length - 1; i >= 0; i--) {
        reverse += result[i] + " ";
    }
    return reverse + "printed to console";
}
function reverseList(list, result = []) {
    if (list !== null) {
        result.unshift(list.value);
        reverseList(list.next, result);
    }
    return result.join(" ") + " printed to console";
}
