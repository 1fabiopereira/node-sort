
const expect = require("chai").expect;
const { insertion } = require("../../src");

describe("insertion", () => {

    it("should throw if fnCompare is not a function", () => {
        const array = [], fnCompare = "NotAFunction";
        expect( insertion.bind( null, array, fnCompare ) ).to.throw();
    });

    it("should throw if array is not an array", () => {
        const array = "NotAnArray";
        expect( insertion.bind( undefined, array ) ).to.throw();
    });

    it("should return an empty array if the given array is empty", () => {
        const array = [];
        const expected = [];
        expect( insertion( array ) ).to.eql( expected );
    });

    it("should order an array of size 1 without fnCompare", () => {
        const array = [ 5 ];
        const expected = [ 5 ];

        expect( insertion( array ) ).to.eql( expected );
    });

    it("should order array without fnCompare", () => {
        const array = [ 5, 1, 4, 2, 8 ];
        const expected = [ 1, 2, 4, 5, 8 ];

        expect( insertion( array ) ).to.eql( expected );
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

        expect( insertion( array, fnCompare ) ).to.eql( expected );
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

        expect( insertion( array, fnCompare ) ).to.eql( expected );
    });
});
