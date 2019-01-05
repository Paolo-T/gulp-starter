


 *ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 S6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 S6 ES6 ES6 ES6 ES6 ES6 ES6ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 S6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 S6 ES6 ES6 ES6*


----------------------------------------------------------------
### • Array helper
----------------------------------------------------------------

**for...of**


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
<br>
<br>
<br>
<br>

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
<br>
<br>

**Array.prototype.sort()**
<br>
<br>
The sort() method sorts the elements of an array in place and returns the array. Javascript sort algorithm on V8 is now stable. The default sort order is according to string Unicode code points.

The time and space complexity of the sort cannot be guaranteed as it is implementation dependent.

```
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```
<br>
<br>
<br>
<br>

**Array.prototype.splice()**
<br>
<br>
The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

```
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

```

```
var months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb');
// inserts at 1st index position

console.log(months);

// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at 4th index

console.log(months);

// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

```




<br>
<br>

----------------------------------------------------------------
### • Arrow Functions
----------------------------------------------------------------

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

<br>
<br>

----------------------------------------------------------------
### • Classes
----------------------------------------------------------------

Classes are in fact *special functions*, and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.
<br>
Primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.
<br>
<br>

**Hoisting**
An important difference between function declarations and class declarations is that function declarations are hoisted and **class declarations are not hoisted**. You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError:
<br>
<br>

#### Class declarations

```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  method() {
    //some method
  }
}

```

<br>

**The constructor**

<br>
The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class. A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.

<br>
<br>

#### Prototype methods

```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100

```

<br>
<br>

---------------------------------------------------------------
### • Destructuring
----------------------------------------------------------------

The **destructuring assignment syntax** is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

#### Synthax
The object and array literal expressions provide an easy way to create ad hoc packages of data.
<br>
On the left-hand side of the assignment to define what values to unpack from the sourced variable.
<br>

**Array destructuring**

```
var x = [1, 2, 3, 4, 5];

var [y, z] = x;

console.log(y); // 1
console.log(z); // 2

```
<br>

**Object destructuring**

```
var o = {p: 42, q: true};

var {p, q} = o;

console.log(p); // 42
console.log(q); // true

```
<br>

examples:

```
var a, b, rest;
[a, b] = [10, 20];

console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });

console.log(a); // 10
console.log(b); // 20


// Stage 3 proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});

console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

```

<br>
<br>

----------------------------------------------------------------
### • Async / Await
----------------------------------------------------------------
async

await



----------------------------------------------------------------
### • Promises
----------------------------------------------------------------

A promise is a container for a future value.
The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.


```
const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 <= 90) {
        resolve('Hello, Promises!');
    }
        reject(new Error('In 10% of the cases, I fail. Miserably.'));
});

// Two functions
const onResolved = (resolvedValue) => console.log(resolvedValue);
const onRejected = (error) => console.log(error);

myPromise.then(onResolved, onRejected);

// Same as above, written concisely
myPromise.then((resolvedValue) => {
    console.log(resolvedValue);
}, (error) => {
    console.log(error);
});

// Output (in 90% of the cases)

// resolving the promise ...
// Hello, Promises!
// Hello, Promises!


```
<br>
<br>

#### .then()
Accepts two callbacks. The first callback is invoked when the promise is **resolved**. The second callback is executed when the promise is **rejected**.

#### .catch()
Is just a syntactical sugar for .then(undefined, onRejected).

<br>

**Note:**
.then() and .catch() methods always return a promise. So you can chain multiple .then calls together.

<br>
<br>

#### Using .fetch()
The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global *fetch()* method that provides an easy, logical way to fetch resources asynchronously across the network.

```
fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

```




----------------------------------------------------------------
### • Composition pattern
----------------------------------------------------------------
