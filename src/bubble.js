const isFunction = require("lodash.isfunction");
const defaultCompare = require("./defaultCompare");

const bubble = ( array, fnCompare = defaultCompare ) => {

    if( !isFunction(fnCompare) )
        throw new Error("fnCompare must be a function");

    if(!Array.isArray(array))
        throw new Error("array must be an Array");

    if (array.length === 0)
        return [];

    //shallow copy
    const clonedArray = array.slice();

    //Optimized bubble sort: https://en.wikipedia.org/wiki/Bubble_sort
    let size = clonedArray.length;
    do{
        let newSize = 0;
        for( let i = 1; i < size; i++){
            if( fnCompare( clonedArray[i - 1], clonedArray[i] ) > 0 ){
                swap( clonedArray, i - 1, i );
                newSize = i;
            }
        }
        size = newSize;
    }while( size !== 0);

    return clonedArray;
};

const swap = (array, index1, index2) => {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

module.exports = bubble;
