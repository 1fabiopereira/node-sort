'use strict';
const _shell = (array, fnCompare) =>{

    fnCompare = require('../condition/shell')(fnCompare);

    if (!Array.isArray(array) || array.length === 0) return [];

    const size = array.length;

    for (let gap = parseInt(size/2); gap > 0; gap = parseInt(gap/2)){
     for (let i = gap; i < size; i++){
        const swap  = array[i];
        let j;
        for (j = i; j >= gap && array[j - gap] > swap; j-=gap){
            array[j] = array[j - gap];
        }
        array[j] = swap;
     }
    }
    return fnCompare ? (fnCompare(1, 0) ? array : array.reverse()) : array;
};

module.exports = _shell;

