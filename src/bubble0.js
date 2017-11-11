const bubble = (array, fnCompare) =>{

    fnCompare = require("../condition/bubble")(fnCompare);

    if (!Array.isArray(array) || array.length === 0) return [];

    let swapped;

    const fnSwap = function (i) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
    };

    do {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if(fnCompare(array[i], array[i + 1])) fnSwap(i);
        }
    } while (swapped);

    return array;
};

module.exports = bubble;
