"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests


// function filterRange(arr, a, b) {
//     let filteredArray = arr.filter(filterR);
//     return filteredArray;
//}
function filterRange(arr, a, b) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        return arr[i];
        if (arr >= a || arr <= b) {
            result = arr[i];
            return result;

        }

    }
    return arr[i];
}

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (value < a || value > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}




function Calculator() {
    this.methods = {

        "-": (a, b) => a - b,

        "+": (a, b) => a + b,

        "/": (a, b) => a / b,
    };
    this.calculate = function (str) {
        let split = str.split(" "),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    };

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}


function unique(arr) {
    if (arr.length === 0) return "";
    let uniResult = [arr[0]];
    for (let str of arr) {
        if (uniResult.indexOf(str) === -1) uniResult.push(str);
    }
    return uniResult;
}

function groupById(array) {
    return array.reduce((object, value) => {
        object[value.id] = value;
        return object;
    }, {});
}



