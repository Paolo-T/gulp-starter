


 *ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 S6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 S6 ES6 ES6 ES6 ES6 ES6 ES6ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 S6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 S6 ES6 ES6 ES6*


<br>
<br>

----------------------------------------------------------------

### • Array Methods

----------------------------------------------------------------

**Array.prototype.forEach()**
<br>
<br>
The forEach() method executes a provided function once for each array element.
<br>

**RETURNS: undefined**

```
var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"

```



<br>
<br>

**Array.prototype.map()**
<br>
<br>
The map() method creates a new array with the results of calling a provided function on every element in the calling array.<br>
**We MUST use the 'return' on the iterator function!!!**


```
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


```

<br>
<br>

**Array.prototype.filter()**
<br>
<br>
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

**We MUST use the 'return' on the iterator function!!!**

<br>

```
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

```


<br>
<br>

**Array.prototype.find()**
<br>
<br>
The find() method returns the value of **only the first** element in the array that satisfies the provided testing function. Otherwise undefined is returned.

**We MUST use the 'return' on the iterator function!!!**

<br>

```
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12

```

<br>
<br>

**Array.prototype.every()**
<br>
<br>
The every() method tests whether **all elements** in the array pass the test implemented by the provided function.
**Note:** This method returns *true* for any condition put on an empty array.

**We MUST use the 'return' on the iterator function!!!**

<br>

```
var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

```

<br>
<br>

**Array.prototype.some()**
<br>
<br>
The some() method tests whether at least one element in the array passes the test implemented by the provided function.

**Note:** This method returns *false* for any condition put on an empty array.
**We MUST use the 'return' on the iterator function!!!**

<br>

```
var array = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true

```

**Array.prototype.reduce()**
<br>
<br>
The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.
**We MUST use the 'return' on the iterator function!!!**

<br>

```
//ES5

let vals = [5, 4, 1, 2, 9];
let sum = 0;

for (let i = 0; i < vals.length; i++) {
    sum += vals[i];
}

console.log(sum);


//ES6

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

```

<br>
<br>

----------------------------------------------------------------

### •Arrow Functions

----------------------------------------------------------------

<br>
An arrow function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.

```
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]


```


<br>

**Lexical 'this' keyword**

<br>
<br>

----------------------------------------------------------------

### • let / const

----------------------------------------------------------------

<br>

**Let**
<br>
let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.




<br>
<br>

----------------------------------------------------------------

### • Spread operator

----------------------------------------------------------------

**Spread syntax** allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.




----------------------------------------------------------------

### • Classes

----------------------------------------------------------------





---------------------------------------------------------------

### • Destructuring

----------------------------------------------------------------


The **destructuring assignment syntax** is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```
var a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]

```




----------------------------------------------------------------

### • Promises

----------------------------------------------------------------

```
 let someVariableName = new Promise((resolve, reject) => {

    });


```





----------------------------------------------------------------

### • Async / Await

----------------------------------------------------------------
