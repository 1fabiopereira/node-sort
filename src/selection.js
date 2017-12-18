const isFunction = require("lodash.isfunction");
const defaultCompare = require("./defaultCompare");

/**
 * @desc
 *  Selection sort divides the input list insto two lists: one with the ordered elements and one with the unordered elements.
 *  It then switches elements between the two lists until the unordered list is empty.
 *
 * |  Algorithm type    | Sort Type       | Best-case perf.         | Worst-case perf.        | Average perf.           | Worst-case space perf.  | Stable  |
 * |  :---------------- | :-------------- | :---------------------- | :---------------------- | :---------------------  | :---------------------  | :-----  |
 * |  Sorting Algorithm | Comparison Sort |  O(nˆ2) comp., O(n) sw. | O(nˆ2) comp., O(n) sw.  | O(nˆ2) comp., O(n) sw.  | О(n) total, O(1) aux.   | No      |
 *
 * Where:
 *
 *  - • perf.: performance.
 *  - • comp.: comparisions
 *  - • sw.: swaps
 *  - • aux.: auxiliary
 *
 *
 * Amongst the simple quadradic algorithms, selections sort outperforms bubble sort and gnome sort most of the time.
 *
 * However, it suffers in comparision with insertion sort, which has better performance complexity.
 * Still, in situations where auxiliary memory is limited this algorithm is preferred.
 * Another important consideration when comparing with insertion sort is consistency. Because this algorithm always scans the entirity of the array,
 * it's performance is always the same, whereas with insertion sort, it widely depends on whether the input array is almost sorted or not.
 *
 * Still, even though selection sort is better than insertion sort when comparing the number of writes, it never outperforms cycle sort, which is optimized in order to minimize this factor.
 * This is usually important when the cost of writes is important, like when writing to Flash memory.
 *
 * Additional information on the algorithm:
 *
 *  - • [Wikipedia Selection Sort](https://en.wikipedia.org/wiki/Selection_sort)
 *  - • [Tutorials Point Selection Sort](https://www.tutorialspoint.com/data_structures_algorithms/selection_sort_algorithm.htm)
 *  - • [GeeksforGeeks Selection Sort](http://www.geeksforgeeks.org/selection-sort/)
 *
 * Variations:
 * - • Heap sort is a modification of this algorithm that uses a heap data structure to find the lowest element. Given an N big enough, heap sort will be more efficient performance wise.
 * - • Cocktail sort is a bi-directional version of this algorithm which finds both the minimum and maximum values of the list in each pass.
 * - • Bing sort is a variant where the greatest value is found and moving all items with that value to the end of the new list.
 *
 * @param  {Array}    array                       The array to be sorted.
 * @param  {Function} [fnCompare=defaultCompare]  A compare function.
 * @return {Array}                                A new sorted array.
 * @see    {@link defaultCompare} for the default comparision function.
 * @see    {@link insertion} to check the insertion sort algorithm specs.
 *
 * @example <caption>Using selection sort with a custom compare function.</caption>
 * const { selection } = require("node-sortable");
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
 * const sorted = selection( array, fnCompare );
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
 * @example <caption>Using selection sort with the default compare function.</caption>
 * const { selection } = require("node-sortable");
 *
 * const array = [ 5, 1, 4, 2, 8 ];
 *
 * const sorted = selection( array );
 *
 * //sorted will equal: [ 1, 2, 4, 5, 8 ]
 */
const selection = ( array, fnCompare = defaultCompare ) => {

    if( !isFunction(fnCompare) )
        throw new Error("fnCompare must be a function");

    if(!Array.isArray(array))
        throw new Error("array must be an Array");

    if (array.length === 0)
        return [];

    //shallow copy
    const clonedArray = array.slice();

    //default non stable implementation: https://en.wikipedia.org/wiki/Selection_sort
    for( let j = 0; j < clonedArray.length - 1; j++ ){

        let iMin = j;
        for( let i = j + 1; i < clonedArray.length; i++ ){
            if( fnCompare( clonedArray[i], clonedArray[iMin] ) < 0 ){
                iMin = i;
            }
        }

        if( iMin !== j ){
            swap(clonedArray, j, iMin );
        }
    }

    return clonedArray;
};

const swap = (array, index1, index2) => {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

module.exports = selection;
