// Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

// A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

// If the length of the array is 0, it should return init.

// Solve it without using the built-in Array.reduce method.



type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let accumulator = init;
    
    for(let i = 0; i < nums.length; i++){
        accumulator = fn(accumulator, nums[i]);
    }
    return accumulator;
};

//OUTPUT test cases
let nums = [1,2,3,4]
let fn = function sum(accum:number, curr: number) { return accum + curr; }
let init = 0
console.log(reduce(nums, fn, init))