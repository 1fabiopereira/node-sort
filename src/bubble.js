const isFunction = require("lodash.isfunction");
const defaultCompare = require("./defaultCompare");

/**
 * @desc
 * Bubble sort ( aka sinking sort ) is an algorithm that steps through a list comparing adjacent items and swapping then when necessary.
 * This pass through is completed until no more swaps are needed.
 *
 * |  Algorithm type    | Sort Type       | Best-case perf. | Worst-case perf.  | Average perf. | Worst-case space perf.  | Stable  |
 * |  :---------------- | :-------------- | :-------------- | :---------------  | :------------ | :---------------------  | :-----  |
 * |  Sorting Algorithm | Comparison Sort | O(n)            | O(nˆ2)            | O(nˆ2)        | O(1) aux                | Yes     |
 *
 * Where perf. stands for performance.
 *
 * This algorithm is mainly used for academic purposes as its temporal complexity one of the worst of the Comparison Sorting algorithms.
 * When considering this algorithm, it is widely suggested to invest in Insertion sort instead which generally produces faster results.
 *
 * Additional information on the algorithm:
 *
 *  - [Wikipedia Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort)
 *  - [Tutorials Point Bubble Sort](https://www.tutorialspoint.com/data_structures_algorithms/bubble_sort_algorithm.htm)
 *  - [GeeksforGeeks Bubble Sort](http://www.geeksforgeeks.org/bubble-sort/)
 *
 * @param  {Array}    array                       The array to be sorted.
 * @param  {Function} [fnCompare=defaultCompare]  A compare function.
 * @return {Array}                                A new sorted array.
 * @see    {@link defaultCompare} for the default comparision function.
 *
 * @example <caption>Using bubble sort with a custom compare function.</caption>
 * const { bubble } = require("node-sortable");
 *
 * const array = [
 *        { name: "John", age: 5 },
 *        { name: "Cersei", age: 1 },
 *        { name: "Ned", age: 4 },
 *        { name: "Aria", age: 2 },
 *        { name: "Tyrion", age: 8 }
 *    ],
 *    fnCompare = ( obj1, obj2 ) => {
 *        if( obj1.age < obj2.age )
 *            return -1;
 *        if( obj1.age > obj2.age )
 *            return 1;
 *        return 0;
 *    };
 *
 * const sorted = bubble( array, fnCompare );
 *
 * //sorted will equal:
 * // [
 * //     { name: "Cersei", age: 1 },
 * //     { name: "Aria", age: 2 },
 * //     { name: "Ned", age: 4 },
 * //     { name: "John", age: 5 },
 * //     { name: "Tyrion", age: 8 }
 * // ]
 *
 * @example <caption>Using bubble sort with the default compare function.</caption>
 * const { bubble } = require("node-sortable");
 *
 * const array = [ 5, 1, 4, 2, 8 ];
 *
 * const sorted = bubble( array );
 *
 * //sorted will equal: [ 1, 2, 4, 5, 8 ]
 */
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
