


 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 ES6 S6 ES6 ES6 ES6 ES6 S6 ES6 ES6 


### • Array Methods

----------------------------------------------------------------

**Array.prototype.forEach()** 
<br>
<br>
The forEach() method executes a provided function once for each array element.<br>
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
The filter() method creates a new array with all elements that pass the test implemented by the provided function.<br>
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

```
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12

```



### Classes




### Arrow Functions

**Lexical 'this' keyword**

### Let / Const

### Destructuring


### Promises

```
 let someVariableName = new Promise((resolve, reject) => {
        
    });


```


### Async / Await

