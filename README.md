#  node-sortable :rocket::smile: 
[![Build Status](https://travis-ci.org/1fabiopereira/node-sortable.svg?branch=master)](https://travis-ci.org/1fabiopereira/node-sortable) [![npm version](https://badge.fury.io/js/node-sortable.svg)](https://badge.fury.io/js/node-sortable) [![Coverage Status](https://coveralls.io/repos/github/1fabiopereira/node-sortable/badge.svg)](https://coveralls.io/github/1fabiopereira/node-sortable)
### :pushpin:  What is that ?


__node-sortable__ is a library that implements various sorting algorithms and displays its performance according to BIG -O notation.


### :pushpin:  Big-O Complexity Chart

<img src="https://cdn.rawgit.com/1fabiopereira/node-sortable/master/img/chart.svg">

In computer science, big O notation is used to classify algorithms by how they respond to changes in input size, such as how the processing time of an algorithm changes as the problem size becomes extremely large.

[See more](https://en.wikipedia.org/wiki/Big_O_notation)

# :pushpin:  Roadmap

| Algorithm  | Status |
| :-------------: | :-------------: |
| Quick  | DONE  |
| Merge  | DONE  |
| Comb  | DONE  |
| Time  | TODO  |
| Heap  | DONE  |
| Bubble  | DONE  |
| Insertion  | DONE |
| Selection  | TODO  |
| Tree  | TODO  |
| Shell | DONE  |
| Bucket  | DONE  |
| Radix  | DONE  |
| Counting  | TODO  |
|  Cube  | TODO  |


### :pushpin:  How to install
---

Verify if you have [node](http://nodejs.org/) and [npm](https://www.npmjs.org/) installed.

##### :white_check_mark:  Run:

```
npm install node-sortable --save
```

```
const sort = require('node-sortable');
```
---


### :pushpin:  Methods
---


##### :white_check_mark: Comb Sort
```
sort.comb(array, sort.DESC)
```
```
sort.comb(array, sort.ASC)
```
```
sort.comb(array, comparisonFunction)
```

##### :white_check_mark: Quick Sort
```
sort.quick(array, sort.DESC)
```
```
sort.quick(array, sort.ASC)
```
```
sort.quick(array, comparisonFunction)
```

##### :white_check_mark: Merge Sort
```
sort.merge(array, sort.DESC)
```
```
sort.merge(array, sort.ASC)
```
```
sort.merge(array, comparisonFunction)
```

##### :white_check_mark: Selection Sort
```
sort.selection(array, sort.DESC)
```
```
sort.selection(array, sort.ASC)
```
```
sort.selection(array, comparisonFunction)
```

##### :white_check_mark: Bubble Sort
```
sort.bubble(array, sort.DESC)
```
```
sort.bubble(array, sort.ASC)
```
```
sort.bubble(array, comparisonFunction)
```

##### :white_check_mark: Insertion Sort
```
sort.insertion(array, sort.DESC)
```
```
sort.insertion(array, sort.ASC)
```
```
sort.insertion(array, comparisonFunction)
```

##### :white_check_mark: Bucket Sort
:warning: This implementation only supports integers
```
sort.bucket(array, bucketSize, sort.DESC)
```
```
sort.bucket(array, bucketSize, sort.ASC)
```
```
sort.bucket(array, bucketSize, comparisonFunction)
```

##### :white_check_mark: Shell Sort
:warning: This implementation only supports integers
```
sort.shell(array, sort.DESC)
```
```
sort.shell(array, sort.ASC)
```
```
sort.shell(array, comparisonFunction)
```

##### :white_check_mark: Heap Sort
:warning: This implementation only supports numbers
```
sort.heap(array, sort.DESC)
```
```
sort.heap(array, sort.ASC)
```

 :pencil2: Example how to use:

```javascript   
let numbers = [10, 1, 2, 13];

sort.method(numbers, sort.ASC); //[1,2,10,13]
sort.method(numbers, sort.DESC); //[13,10,2,1]

let letters = ["A","Z","W","M"];
sort.method(letters, sort.ASC); //["A","M","W","Z"]
sort.method(letters, sort.DESC); //["Z","W","M","A"]
```

:pencil2: Example customized comparison function:

:warning: __Important Note:__ Some comparison conditions are the reverse of the natural because this way the algorithm takes best advantage. Before implementing a custom comparison function check the operation of the algorithm. It is very suitable to use drive tests.

```javascript   
let peoples = [
  {name: "Alex", age: 12},
  {name: "Max", age: 34},
  {name: "Mary", age: 9},
  {name: "Justin", age: 53}
];

const fnASC = (a, b) =>{
  return a.age > b.age; //inverse of the natural condition
}

const fnDESC = (a, b) =>{
  return a.age < b.age; //inverse of the natural condition
}

sort.bubble(peoples, fnASC); //[{name: "Mary", age: 9}, {name: "Alex", age: 12},{name: "Max", age: 34},{name: "Justin", age: 53}];
sort.bubble(peoples, fnDESC); //[{name: "Justin", age: 53},{name: "Max", age: 34},{name: "Alex", age: 12},{name: "Mary", age: 9}];
```

##### :white_check_mark: Radix Sort
```
sort.radix(array, significant_digit);
```
:pencil2: Radix Example:

:warning: This implementation only supports integers

* Input list:
```
let array = [126, 328, 636, 341, 416, 131, 328]
```

  ```
  sort.radix(array, 1);
  ```

  Least significant digit output: 341, 131, 126, 636, 416, 328, 328

  ---

  ```
  sort.radix(array, 2);
  ```

  Next high  significant digit output: 416, 126, 328, 328, 131, 636, 341

  ---

  ```
  sort.radix(array, 3);
  ```

  Most significant digit output: 1 26, 131, 328, 328, 341, 416, 636

  ---


### :pushpin:  Development
---

##### Code style:

Follow the [node-sortable style guide](https://github.com/1fabiopereira/node-sortable/blob/master/CODE-STYLE.md).

Validate the code style with [ESLint](http://eslint.org/):

```
npm run eslint
```

##### Code Docs
Generate code docs with [JSDocs](http://usejsdoc.org/):

```
npm run jsdocs
```

View code docs in docs/index.html

##### Tests

Run the unit tests with [mocha](https://mochajs.org/):

```
npm run test
```

Calculate the coverage with [Istanbul](http://gotwarlost.github.io/istanbul/):
```
npm run cover
```
---

### :pushpin: Versioning
To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.


### :pushpin: Contributing
Find on our [issues](https://github.com/1fabiopereira/node-sortable/issues) the next steps of the project ;)
Want to contribute? [Follow these recommendations](https://github.com/1fabiopereira/node-sortable/blob/master/CONTRIBUTING.md).


### :pushpin:  License
---

The MIT License (MIT)

Copyright (c) 2016 Fábio Pereira

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
