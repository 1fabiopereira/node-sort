

const selection = (array, fnCompare) => {

    fnCompare = require("../condition/selection")(fnCompare);

    if (!Array.isArray(array) || array.length === 0) return [];

    const length = array.length;

    for (let i = 0; i < length - 1; i++) {

        let min = i;

        for (let j = i + 1; j < length; j++) {
            if (fnCompare(array[j], array[min])) min = j;
        }

        if (min != i) {
            //Swap the numbers 
            const tmp = array[i];
            array[i] = array[min];
            array[min] = tmp;
        }
    }

    return array;
};

module.exports = selection;

