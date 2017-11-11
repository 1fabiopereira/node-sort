
const quick = (array, fnCompare) => {

    fnCompare = require("../condition/quick")(fnCompare);

    if (!Array.isArray(array) || array.length === 0) return [];

    const left = [];
    const right = [];
    const pivot = array[0];

    for (let i = 1; i < array.length; i++) {
        fnCompare(array[i], pivot) ? left.push(array[i]) : right.push(array[i]);
    }

    return quick(left, fnCompare).concat(pivot, quick(right, fnCompare));
};


module.exports = quick;
