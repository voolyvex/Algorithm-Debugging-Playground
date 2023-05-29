// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.
function once(fn) {
    var wasCalled = false;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (wasCalled) {
            return undefined;
        }
        else {
            wasCalled = true;
            return fn.apply(void 0, args);
        }
    };
}
//OUTPUT test cases
var _fn = function (a, b, c) { return (a + b + c); };
var onceFn = once(_fn);
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
