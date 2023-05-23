// Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
function reduce(nums, fn, init) {
    var accumulator = init;
    for (var i = 0; i < nums.length; i++) {
        accumulator = fn(accumulator, nums[i]);
    }
    return accumulator;
}
;
//OUTPUT test cases
var nums = [1, 2, 3, 4];
var fn = function sum(accum, curr) { return accum + curr * curr; };
var init = 100;
console.log(reduce(nums, fn, init));
