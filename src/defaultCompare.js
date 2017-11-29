/**
 * Default sort according to string Unicode code points. This is as specified in [Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
 * This function is the default sorting function as specified in the [ECMA script](http://www.ecma-international.org/ecma-262/6.0/#sec-sortcompare).
 *
 * It is provided to all sorting algorithms as a default comparision function which can be overwritten if desired.
 *
 * @param x The first element to be compared.
 * @param y The second element to be compared.
 * @return {Number} 0 if both elements are the same, -1 if `x` should have a lower index then `y` and 1 otherwise.
 */
const defaultCompare = ( x, y ) => {
    //INFO: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    //ECMA specification: http://www.ecma-international.org/ecma-262/6.0/#sec-sortcompare

    if( x === undefined && y === undefined )
        return 0;

    if( x === undefined )
        return 1;

    if( y === undefined )
        return -1;

    const xString = toString(x);
    const yString = toString(y);

    if( xString < yString )
        return -1;

    if( xString > yString )
        return 1;

    return 0;
};

const toString = obj => {
    //ECMA specification: http://www.ecma-international.org/ecma-262/6.0/#sec-tostring

    if( obj === null )
        return "null";

    if( typeof obj === "boolean" ||  typeof obj === "number" )
        return (obj).toString();

    if( typeof obj === "string" )
        return obj;

    if( typeof obj === "symbol" )
        throw new TypeError();

    //we know we have an object. perhaps return JSON.stringify?
    return (obj).toString();
};

module.exports = defaultCompare;
