
const assert = require("chai").assert;
const sort = require("../sort");

describe("Radix", () => {

    const fn_descrescente = (a,b) => a > b;

    const exec = (array, maxDigit) =>{
        return sort.radix(array, maxDigit);
    };

    // Ordenação quando não é um array
    describe("Não Array", ()=> {
        it("Null", ()=>{
            assert.deepEqual([], exec(null, null, sort.ASC), "Array vazio quando valor for null");
            assert.deepEqual([], exec(null, null, sort.DESC), "Array vazio quando valor for null");
        });

        it("Undefined", ()=>{
            assert.deepEqual([], exec(undefined, null, sort.ASC), "Array vazio quando valor for undefined");
            assert.deepEqual([], exec(undefined,null, sort.DESC), "Array vazio quando valor for undefined");
        });
    });

    // Ordenação quando o array é vazio ou indefinido
    describe("Array Vazio", () => {
        it("Ordenação decrescente array vazio", ()=> {
            assert.deepEqual([], exec([], null), "Tipo do retorno Array");
        });

        it("Ordenação crescente array vazio", ()=> {
            assert.deepEqual([], exec([], null), "Tipo do retorno Array");
        });
    });

    // Verifica a ordenção de um array de números
    describe("Array de Números", () => {
        const array_in = [126, 328, 636, 341, 416, 131, 328];

        const array_out_1 = [341, 131, 126, 636, 416, 328, 328];
        const array_out_2 = [416, 126, 328, 328, 131, 636, 341];
        const array_out_3 = [126, 131, 328, 328, 341, 416, 636];

        it("Ordenação defaul Least significant digit (LSD – Dígito menos significativo)", ()=> {
            assert.deepEqual(array_out_1, exec(array_in));
        });

        it("Ordenação Least significant digit (LSD – Dígito menos significativo)", ()=> {
            assert.deepEqual(array_out_1, exec(array_in, 1));
        });

        it("Ordenação NEXT-HIGHER", ()=>{
            assert.deepEqual(array_out_2, exec(array_in, 2));
        });

        it("Ordenação Most significant digit (MSD – Dígito mais significativo) ", ()=> {
            assert.deepEqual(array_out_3, exec(array_in, 3));
        });
    });

});
