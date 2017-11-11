
const expect = require("chai").expect;
const { bubble } = require("../sort");

describe("bubble", () => {

    it("should throw if fnCompare is not a function", () => {
        const array = [], fnCompare = "NotAFunction";
        expect( bubble.bind( undefined, array, fnCompare ) ).to.throw;
    });

    it("should throw if array is not an array", () => {
        const array = "NotAnArray", fnCompare = () => {};
        expect( bubble.bind( undefined, array, fnCompare ) ).to.throw;
    });

    it("should return an empty array if the given array is empty", () => {
        const array = [], fnCompare = () => {};
        const expected = [];
        expect( bubble( array, fnCompare ) ).to.eql( expected );
    });

    it("should order array according to fnCompare", () => {

    });
});
