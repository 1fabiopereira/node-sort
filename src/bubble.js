const isFunction = require("lodash.isfunction");
const cloneDeep = require("lodash.clonedeep");

const defaultCompare = require("./defaultCompare");

const bubble = ( array, fnCompare = defaultCompare ) => {

    if( !isFunction(fnCompare) )
        throw new Error("fnCompare must be a function");

    if(!Array.isArray(array))
        throw new Error("array must be an Array");

    if (array.length === 0)
        return [];

    const clonedArray = cloneDeep(array);

    return recursiveSort( clonedArray, clonedArray.length, fnCompare );
};

const recursiveSort = ( array, unsortedLength, fnCompare ) => {
    if( unsortedLength === 1 )
        return array;

    let swapped = false;
    for( let i = 0; i < unsortedLength - 1; i++ ){

        if( fnCompare( array[i], array[i + 1] ) > 0 ){
            const temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
            swapped = true;
        }
    }

    //Ensure O(n) if array is already ordered
    if(!swapped)
        return array;

    return recursiveSort( array, unsortedLength - 1, fnCompare );
};

module.exports = bubble;
