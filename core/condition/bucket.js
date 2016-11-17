'use strict';
module.exports = (fnCompare)=>{

    const swap = fnCompare;

    if(typeof(fnCompare) === 'boolean' && !fnCompare)
        fnCompare = (a, b) => a < b;
    else if(typeof(fnCompare) === 'boolean')
        fnCompare = (a, b) => a > b;
    else
        fnCompare = false;

    return fnCompare ? fnCompare : swap;
};
