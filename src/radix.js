
const counter = [[]];
const radix = (array, maxDigit) =>{

    if(!maxDigit) maxDigit = 1;
    if (!Array.isArray(array) || array.length === 0) return [];

    let mod = 10;
    let dev = 1;

    for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {

        array.forEach((elem, j) => {
            const bucket = parseInt(array[j] % mod / dev);
            if(counter[bucket] == null) counter[bucket] = [];
            counter[bucket].push(array[j]);
        });

        let pos = 0;

        counter.forEach((elem, j) => {
            let value = null;
            if(counter[j]!= null) while ((value = counter[j].shift()) != null) { array[pos++] = value;}
        });
    }

    return array;
};

module.exports = radix;
