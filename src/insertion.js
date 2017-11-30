const isFunction = require("lodash.isfunction");
const defaultCompare = require("./defaultCompare");

const insertion = ( array, fnCompare = defaultCompare ) => {
    if( !isFunction(fnCompare) )
        throw new Error("fnCompare must be a function");

    if(!Array.isArray(array))
        throw new Error("array must be an Array");

    if (array.length === 0)
        return [];

    //shallow copy
    const clonedArray = array.slice();

    //Optimized iterative version: https://en.wikipedia.org/wiki/Insertion_sort
    let i = 1, j, temp;
    while( i < clonedArray.length ){
        temp = clonedArray[i];
        j = i - 1;
        while( j >= 0 && fnCompare(clonedArray[ j ], temp) > 0 ){
            clonedArray[ j + 1 ] = clonedArray[ j ];
            j = j - 1;
        }
        clonedArray[ j + 1 ] = temp;
        i = i + 1;
    }

    return clonedArray;
};

module.exports = insertion;
