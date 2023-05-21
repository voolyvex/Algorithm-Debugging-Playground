// Given an integer array arr and a mapping function fn, return a new array with a  transformation applied to each element.
// Solve it without the built-in Array.map method.
// The returned array should be created such that

// returnedArray[i] = fn(arr[i], i).




function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = fn(arr[i], i);
    }
    return arr;
};

let arr1 = [1,2,3]
let fn1 = function plusone(n: number) { return n + 1; }
let arr2 = [1,2,3]
let fn2 = function plusI(n: number, i: number) { return n + i; }
let arr3 = [1,2,3]
let fn3 = function constant(n: number, i: number) { return 42; }
console.log(map(arr1, fn1))
console.log(map(arr2, fn2))
console.log(map(arr3, fn3))