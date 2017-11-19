

const heapSort = function(array, fnCompare) {

    fnCompare = require("../condition/heap")(fnCompare);

    if (!Array.isArray(array) || array.length === 0) return [];

    const swap = (array, firstIndex, secondIndex) => {
        const temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    };

    const maxHeap = (array, i) => {
        const l = 2 * i;
        const r = l + 1;
        let largest;

        if(l < array.heapSize && array[l] > array[i]) {
            largest = l;
        } else {
            largest = i;
        }

        if (r < array.heapSize && array[r] > array[largest]) {
            largest = r;
        }

        if (largest != i) {
            swap(array, i, largest);
            maxHeap(array, largest);
        }
    };

    const buildHeap = (array) => {
        array.heapSize = array.length;
        for (let i = Math.floor(array.length / 2); i >= 0; i--) {
            maxHeap(array, i);
        }
    };

    buildHeap(array);

    for (let i = array.length-1; i >= 1; i--) {
        swap(array, 0, i);
        array.heapSize--;
        maxHeap(array, 0);
    }

    delete array.heapSize;
    return fnCompare ? array : array.reverse();
};

module.exports = heapSort;