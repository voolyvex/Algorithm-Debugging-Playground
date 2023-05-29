// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.


function once<T extends (...args: any[]) => any>(fn: T):
    ((...args: Parameters<T>) => ReturnType<T> | undefined) {
    let wasCalled = false;
    return function (...args) {
        if (wasCalled) {
            return undefined;
          } else {
            wasCalled = true;
            return fn(...args);
          }
    }
}

//OUTPUT test cases
let _fn = (a: any, b: any, c: any) => (a + b + c)
let onceFn = once(_fn)

console.log(onceFn(1, 2, 3)) // 6
console.log(onceFn(2, 3, 6)) // returns undefined without calling fn
