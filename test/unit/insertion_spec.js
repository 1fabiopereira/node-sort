
const assert = require("chai").assert;
const sort = require("../sort");

describe("InsertionSort", ()=> {

    const exec = (array, fnCompare) =>{
        return sort.insertion(array, fnCompare);
    };

    // Ordenação quando não é um array
    describe("Não Array", ()=> {

        it("Null", () =>{
            assert.deepEqual([], exec(null, sort.ASC), "Array vazio quando valor for null");
            assert.deepEqual([], exec(null, sort.DESC), "Array vazio quando valor for null");
        });

        it("Undefined", ()=>{
            assert.deepEqual([], exec(undefined, sort.ASC), "Array vazio quando valor for undefined");
            assert.deepEqual([], exec(undefined, sort.DESC), "Array vazio quando valor for undefined");
        });

    });

    //Ordenação quando o array é vazio ou indefinido
    describe("Array Vazio", () => {

        it("Ordenação decrescente array vazio", ()=> {
            assert.deepEqual([], exec([], sort.DESC), "Tipo do retorno Array");
        });

        it("Ordenação crescente array vazio", ()=> {
            assert.deepEqual([], exec([], sort.ASC), "Tipo do retorno Array");
        });

    });


    // Verifica a ordenção de um array de números
    describe("Array de Números", () => {
        const array_in = [3,1,2, 10, 100, 138, 321, 4, 3];
        const array_out_desc = [321,138,100,10,4,3,3,2,1];
        const array_out_asc = [1,2,3,3,4,10,100,138,321];

        it("Ordenação decrescente", ()=> {
            assert.deepEqual(array_out_desc, exec(array_in, sort.DESC));
        });

        it("Ordenação crescente", ()=> {
            assert.deepEqual(array_out_asc, exec(array_in, sort.ASC));
        });
    });


    // verifica ordenação de um array de letras
    describe("Array Letras", () => {
        const array_in = ["b","a","c"];
        const array_out_desc = ["c","b","a"];
        const array_out_asc = ["a","b","c"];

        it("Ordenação decrescente", ()=> {
            assert.deepEqual(array_out_desc, exec(array_in, sort.DESC));
        });

        it("Ordenação crescente", ()=> {
            assert.deepEqual(array_out_asc, exec(array_in, sort.ASC));
        });
    });

    describe("Array Objetos", ()=> {
        const array_in = [
            {name: "Alex", age: 12},
            {name: "Max", age: 34},
            {name: "Mary", age: 9},
            {name: "Justin", age: 53}
        ];

        const array_out_asc = [
            {name: "Mary", age: 9},
            {name: "Alex", age: 12},
            {name: "Max", age: 34},
            {name: "Justin", age: 53}
        ];

        const array_out_desc = [
            {name: "Justin", age: 53},
            {name: "Max", age: 34},
            {name: "Alex", age: 12},
            {name: "Mary", age: 9}
        ];

        const fnASC = (a,b) => {
            return a.age > b.age;
        };

        const fnDESC = (a,b) => {
            return a.age < b.age;
        };

        it("Ordenação crescente", ()=> {
            assert.deepEqual(array_out_asc, exec(array_in, fnASC));
        });

        it("Ordenação decrescente", ()=> {
            assert.deepEqual(array_out_desc, exec(array_in, fnDESC));
        });
    });

});
