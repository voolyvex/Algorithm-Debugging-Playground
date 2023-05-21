// Given an integer array arr and a mapping function fn, return a new array with a  transformation applied to each element.
// Solve it without the built-in Array.map method.
// The returned array should be created such that
// returnedArray[i] = fn(arr[i], i).
function map(arr, fn) {
    for (var i = 0; i < arr.length; ++i) {
        arr[i] = fn(arr[i], i);
    }
    return arr;
}
;
var arr1 = [1, 2, 3];
var fn1 = function plusone(n) { return n + 1; };
var arr2 = [1, 2, 3];
var fn2 = function plusI(n, i) { return n + i; };
var arr3 = [1, 2, 3];
var fn3 = function constant(n, i) { return 42; };
console.log(map(arr1, fn1));
console.log(map(arr2, fn2));
console.log(map(arr3, fn3));
