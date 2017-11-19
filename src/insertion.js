

const _insertion = (array, fnCompare) =>{

    fnCompare = require("../condition/insertion")(fnCompare);

    if (!Array.isArray(array) || array.length === 0) return [];

    const len = array.length;

    for (let i = 0; i < len; i++) {
        const tmp = array[i];
        for (var j = i - 1; j >= 0 && fnCompare(array[j], tmp); j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = tmp;
    }

    return array;
};
module.exports = _insertion;
