Iterative methods

- method(callbackFn, thisArg)
    Where callbackFn takes three arguments:

    - element
    The current element being processed in the array.

    - index
    The index of the current element being processed in the array.

    - array
    The array that the method was called upon.
=============================================
forEach(callbackFn)
forEach(callbackFn, thisArg)
============================================= 
map(callbackFn)
map(callbackFn, thisArg)
=============================================
filter(callbackFn)
filter(callbackFn, thisArg)
=============================================
reduce(callback(accumulator,currentValue,currentIndex,array),initial value)
==================================================================

- array
    - new array return ->  map()     - provided function to each element 
                         filter()  - pass a specified test
    
    - 