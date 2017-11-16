const defaultCompare = ( x, y ) => {
    //INFO: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    //ECMA specification: http://www.ecma-international.org/ecma-262/6.0/#sec-sortcompare

    if( x === undefined && y === undefined )
        return 0;

    if( x === undefined )
        return 1;

    if( y === undefined )
        return -1;

    const xString = x + "";
    const yString = y + "";

    if( xString < yString )
        return -1;

    if( xString > yString )
        return 1;

    return 0;
};

module.exports = defaultCompare;
