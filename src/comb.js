

const comb = (array, fnCompare) =>{

    fnCompare = require("../condition/comb")(fnCompare);

    if (!Array.isArray(array) || array.length === 0) return [];

    let gap = array.length;
    let swapped;

    const fnSwap = function (i) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
    };

    while (gap > 1 || swapped ) {

        if (gap > 1) gap = parseInt(gap / 1.247330950103979);

        let i = 0;
        swapped = false;

        while (i + gap < array.length) {
            if (fnCompare(array[i], array[i + gap]) > 0)
                fnSwap(i);
            i++;
        }
    }
    return array;
};

module.exports = comb;
