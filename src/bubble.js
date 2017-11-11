const isFunction = require("lodash.isfunction");

const bubble = (array, fnCompare) => {

    if(!isFunction(fnCompare))
        throw new Error("fnCompare must be a function");

    if(!Array.isArray(array))
        throw new Error("array must be an Array");

    if (array.length === 0)
        return [];

    let swapped;

    //not very functional :P
    do {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if(fnCompare(array[i], array[i + 1])) fnSwap(i);
        }
    } while (swapped);

    return array;
};

//this is directly altering the array we start with
const fnSwap = function (i) {
    const temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
    swapped = true;
};

module.exports = bubble;
