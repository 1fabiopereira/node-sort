'use strict';

const DEFAULT_BUCKET_SIZE = 5;
const insertion = require('./insertion');

const _bucket = (array, bucketSize, fnCompare) =>{

    fnCompare = require('../condition/bucket')(fnCompare);

    if (!Array.isArray(array) || array.length === 0) return [];

    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;

    let i;
    let minValue = array[0];
    let maxValue = array[0];

    for (i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        } else if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }

    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;


    let buckets = new Array(bucketCount);

    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    for (i = 0; i < array.length; i++) {
        buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
    }

    array.length = 0;

    for (i = 0; i < buckets.length; i++) {
        buckets[i] = insertion(buckets[i], false);
        for (let j = 0; j < buckets[i].length; j++) {
            array.push(buckets[i][j]);
        }
    }

    return fnCompare ? (fnCompare(0,1) ? array : array.reverse()) : array;
};

module.exports = _bucket;
