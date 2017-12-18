
const expect = require("chai").expect;
const { selection } = require("../../src");

describe("selection", () => {

    it("should throw if fnCompare is not a function", () => {
        const array = [], fnCompare = "NotAFunction";
        expect( selection.bind( null, array, fnCompare ) ).to.throw();
    });

    it("should throw if array is not an array", () => {
        const array = "NotAnArray";
        expect( selection.bind( undefined, array ) ).to.throw();
    });

    it("should return an empty array if the given array is empty", () => {
        const array = [];
        const expected = [];
        expect( selection( array ) ).to.eql( expected );
    });

    it("should order an array of size 1 without fnCompare", () => {
        const array = [ 5 ];
        const expected = [ 5 ];

        expect( selection( array ) ).to.eql( expected );
    });

    it("should order array without fnCompare", () => {
        const array = [ 5, 1, 4, 2, 8 ];
        const expected = [ 1, 2, 4, 5, 8 ];

        expect( selection( array ) ).to.eql( expected );
    });

    it("should order array in ascending order", () => {
        const array = [
                { name: "John", age: 5 },
                { name: "Cersei", age: 1 },
                { name: "Ned", age: 4 },
                { name: "Aria", age: 2 },
                { name: "Tyrion", age: 8 }
            ],
            fnCompare = ( obj1, obj2 ) => {
                if( obj1.age < obj2.age )
                    return -1;
                if( obj1.age > obj2.age )
                    return 1;
                return 0;
            };

        const expected = [
            { name: "Cersei", age: 1 },
            { name: "Aria", age: 2 },
            { name: "Ned", age: 4 },
            { name: "John", age: 5 },
            { name: "Tyrion", age: 8 }
        ];

        expect( selection( array, fnCompare ) ).to.eql( expected );
    });

    it("should order array in descending order", () => {
        const array = [
                { name: "John", age: 5 },
                { name: "Cersei", age: 1 },
                { name: "Ned", age: 4 },
                { name: "Aria", age: 2 },
                { name: "Tyrion", age: 8 }
            ],
            fnCompare = ( obj1, obj2 ) => {
                if( obj1.age > obj2.age )
                    return -1;
                if( obj1.age < obj2.age )
                    return 1;
                return 0;
            };

        const expected = [
            { name: "Tyrion", age: 8 },
            { name: "John", age: 5 },
            { name: "Ned", age: 4 },
            { name: "Aria", age: 2 },
            { name: "Cersei", age: 1 }
        ];

        expect( selection( array, fnCompare ) ).to.eql( expected );
    });
});
