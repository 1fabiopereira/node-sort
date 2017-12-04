const isFunction = require("lodash.isfunction");
const defaultCompare = require("./defaultCompare");

/**
 * @desc
 * Insertion sort is a simple algorithm that builds the final sorted array one item at a time.
 *
 * |  Algorithm type    | Sort Type       | Best-case perf. | Worst-case perf.  | Average perf. | Worst-case space perf.  | Stable  |
 * |  :---------------- | :-------------- | :-------------- | :---------------  | :------------ | :---------------------  | :-----  |
 * |  Sorting Algorithm | Comparison Sort | O(n)            | O(nˆ2)            | O(nˆ2)        | О(n) total, O(1) aux    | Yes     |
 *
 * Where perf. stands for performance.
 *
 * Although less efficient than quicksort, heapsort or merge sort for large data sets, it usually outperforms them for small data sets.
 * It also more effcient than other simple quadradic algorithms such as bubble sort and selection sort.
 *
 * Additional information on the algorithm:
 *
 *  - • [Wikipedia Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort)
 *  - • [Tutorials Point Insertion Sort](https://www.tutorialspoint.com/data_structures_algorithms/insertion_sort_algorithm.htm)
 *  - • [GeeksforGeeks Insertion Sort](http://www.geeksforgeeks.org/insertion-sort/)
 *
 * Variations:
 * - • Shell sort, as created by D.L. Shell has better perf. complexity on both its variants.
 * - • Binary insertion sort, is a simillar algorithm used when the cost of writting data is expensive VS the cost of read it ( using SSD for example ).
 * - • Binary merge sort, is a composition of both insertion sort ( for small array ) and merge sort ( for the final, bigger array ).
 * - • Both heap sort and Binary tree sort are adaptations of this algorithm for heaps and binary trees.
 * - • Library sort, aka gapped insertion is a modification of this algorithm that runs with high probability in O(n log n) time.
 *
 * @param  {Array}    array                       The array to be sorted.
 * @param  {Function} [fnCompare=defaultCompare]  A compare function.
 * @return {Array}                                A new sorted array.
 * @see    {@link defaultCompare} for the default comparision function.
 * @category Collection
 *
 * @example <caption>Using insertion sort with a custom compare function.</caption>
 * const { insertion } = require("node-sortable");
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
 * const sorted = insertion( array, fnCompare );
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
 * @example <caption>Using insertion sort with the default compare function.</caption>
 * const { insertion } = require("node-sortable");
 *
 * const array = [ 5, 1, 4, 2, 8 ];
 *
 * const sorted = insertion( array );
 *
 * //sorted will equal: [ 1, 2, 4, 5, 8 ]
 */
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
