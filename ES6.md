


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






----------------------------------------------------------------

### • Classes

----------------------------------------------------------------

Classes are in fact *special functions*, and just as you can define *function expressions* and *function declarations*, the class syntax has two components: **class expressions** and **class declarations**.

<br>

#### Class Declarations

One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class.

```
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

```




----------------------------------------------------------------

### • Arrow Functions

----------------------------------------------------------------

**Lexical 'this' keyword**

----------------------------------------------------------------

### • Let / Const

----------------------------------------------------------------

<br>

**Let**
<br>
let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.




----------------------------------------------------------------

### • Destructuring

----------------------------------------------------------------







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
