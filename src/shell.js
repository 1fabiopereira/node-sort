const isFunction = require("lodash.isfunction");
const defaultCompare = require("./defaultCompare");

/**
 * @desc
 * Shell sort is an algorithm obtained from the refinement of the insertion sort method direct.
 *
 * |  Algorithm type    | Sort Type       | Best-case perf. | Worst-case perf.  | Average perf. | Worst-case space perf.  | Stable  |
 * |  :---------------- | :-------------- | :-------------- | :---------------  | :------------ | :---------------------  | :-----  |
 * |  Sorting Algorithm | Comparison Sort | O(n log n)      | O(n log2n)        | depends on gap sequence | О(n) total, O(1) aux | False     |
 *
 * Where perf. stands for performance.
 *
 * Shell sort is not used a lot in real life. It is almost never substantially better than one of the big three: quicksort, mergesort or heapsort.
 * It does have some advantages: it is relatively simple to code, it does not use any additional memory compared to the input array, and it is decent even in the worst case.
 * But heapsort is not complicated either, it has the same advantages and it is faster for large arrays. So the main selling point of Shell sort is that it's intriguing.
 *
 * Additional information on the algorithm:
 *
 *  - • [Wikipedia Shell Sort](https://pt.wikipedia.org/wiki/Shell_sort)
 *  - • [Tutorials Point Shell Sort](https://www.tutorialspoint.com/data_structures_algorithms/shell_sort_algorithm.htm)
 *  - • [GeeksforGeeks Shell Sort](http://www.geeksforgeeks.org/shellsort/)
 *
 * Variations:
 * ??????????????????????????????????????????????
 * ??????????????????????????????????????????????
 * ??????????????????????????????????????????????
 *
 * @param  {Array}    array                       The array to be sorted.
 * @param  {Function} [fnCompare=defaultCompare]  A compare function.
 * @return {Array}                                A new sorted array.
 * @see    {@link defaultCompare} for the default comparision function.
 * @category Collection
 *
 * @example <caption>Using shell sort with a custom compare function.</caption>
 * const { shell } = require("node-sortable");
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
 * const sorted = shell( array, fnCompare );
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
 * @example <caption>Using shell sort with the default compare function.</caption>
 * const { shell } = require("node-sortable");
 *
 * const array = [ 5, 1, 4, 2, 8 ];
 *
 * const sorted = shell( array );
 *
 * //sorted will equal: [ 1, 2, 4, 5, 8 ]
 */

const shell = ( array, fnCompare = defaultCompare ) => {

    if( !isFunction(fnCompare) )
        throw new Error("fnCompare must be a function");

    if(!Array.isArray(array))
        throw new Error("array must be an Array");

    if (array.length === 0)
        return [];

    const clonedArray = array.slice();
    const size = clonedArray.length;

    let gap = parseInt( size / 2 ), i, j, swap;

    while ( gap > 0 ) {
        for ( i = gap; i < size; i++ ) {
            swap = clonedArray[ i ];
            for ( j = i; j >= gap && fnCompare(clonedArray[ j - gap ] , swap); j -= gap ){
                clonedArray[ j ] = clonedArray[ j - gap ];
            }
            clonedArray[ j ] = swap;
        }
        gap = parseInt( gap / 2);
    }

    return clonedArray;
};

module.exports = shell;

