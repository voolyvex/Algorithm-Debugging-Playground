// Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements. Solve it without the built-in Array.filter method.

// The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.

function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    let newArr: number[] = [];
    for (let i = 0; i < arr.length; ++i) {
        if (fn(arr[i], i)) {
            newArr.push(arr[i])
        }
    }
    return newArr;
};

const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = filter(numbers, (n, i) => n % 2 === 0);
console.log(filteredNumbers); // Output: [2, 4]
