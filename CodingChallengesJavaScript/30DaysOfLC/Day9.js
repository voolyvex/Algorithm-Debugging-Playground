// Given a function fn, return a memoized version of that function.
function memoize(fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var arg = 0; arg < arguments.length; ++arg) {
            console.log(arguments[arg]);
        }
    };
}
var callCount = 0;
var memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1 
