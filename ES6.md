
# ES6

### Array Methods

**Array.prototype.forEach()** <br>
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

**Array.prototype.map()**<br>
The map() method creates a new array with the results of calling a provided function on every element in the calling array.<br>
**We MUST use the 'return' on the iterator function!!!**



```
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


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

