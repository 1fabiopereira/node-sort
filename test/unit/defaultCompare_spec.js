
const expect = require("chai").expect;
const defaultCompare = require("../../src/defaultCompare");

describe("defaultCompare", () => {

    it("should return -1 if x < y and both are number", () => {
        const x = 1, y = 2, expected = -1;
        expect( defaultCompare( x, y ) ).to.eql( expected );
    });

    it("should return 1 if x > y and both are number", () => {
        const x = 2, y = 1, expected = 1;
        expect( defaultCompare( x, y ) ).to.eql( expected );
    });

    it("should return 0 if x = y and both are number", () => {
        const x = 1, y = 1, expected = 0;
        expect( defaultCompare( x, y ) ).to.eql( expected );
    });

    it("should return -1 if x < y and both are string", () => {
        const x = "a", y = "b", expected = -1;
        expect( defaultCompare( x, y ) ).to.eql( expected );
    });

    it("should return 1 if x > y and both are string", () => {
        const x = "b", y = "a", expected = 1;
        expect( defaultCompare( x, y ) ).to.eql( expected );
    });

    it("should return 0 if x = y and both are string", () => {
        const x = "a", y = "a", expected = 0;
        expect( defaultCompare( x, y ) ).to.eql( expected );
    });

    it("should compare numbers and booleans properly", () => {
        const x = true, y = 1, expected = 1;
        expect( defaultCompare( x, y ) ).to.eql( expected );
    });

    it("should order between null and undefined properly", () => {
        const x = null, y = undefined, expected = -1;
        expect( defaultCompare( x, y ) ).to.eql( expected );
    });

    it("should throw if asked to order a symbol", () => {
        const x = Symbol(), y = null;
        expect( defaultCompare.bind( null, x, y ) ).to.throw();
    });

    it("should return 0 if both x and y are undefined", () => {
        const x = undefined, y = undefined, expected = 0;
        expect( defaultCompare( x, y ) ).to.eql( expected );
    });

    it("should return 1 if x is undefined and y is not", () => {
        const x = undefined, y = 3, expected = 1;
        expect( defaultCompare( x, y ) ).to.eql( expected );
    });

    it("should return 1 if x is null and y is not", () => {
        const x = null, y = 3, expected = 1;
        expect( defaultCompare( x, y ) ).to.eql( expected );
    });

    it("should return -1 if x is a capital letter and y is a small one", () => {
        const x = "C", y = "a", expected = -1;
        expect( defaultCompare( x, y ) ).to.eql( expected );
    });

    it("should return 1 if x is a small letter and y is an object", () => {
        const x = "b", y = {}, expected = 1;
        expect( defaultCompare( x, y ) ).to.eql( expected );
    });

    it("should return -1 if x is a big letter and y is an object", () => {
        const x = "B", y = {}, expected = -1;
        expect( defaultCompare( x, y ) ).to.eql( expected );
    });

    it("should return 1 if x is a small letter and y is a special char", () => {
        const x = "b", y = "]", expected = 1;
        expect( defaultCompare( x, y ) ).to.eql( expected );
    });

    it("should return -1 if x is a big letter and y is a special char", () => {
        const x = "B", y = "]", expected = -1;
        expect( defaultCompare( x, y ) ).to.eql( expected );
    });
});
