// Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements. Solve it without the built-in Array.filter method.
// The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.
function filter(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; ++i) {
        if (fn(arr[i], i)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
;
var numbers = [1, 2, 3, 4, 5];
var filteredNumbers = filter(numbers, function (n, i) { return n % 2 === 0; });
console.log(filteredNumbers); // Output: [2, 4]
