// Given a function fn, return a memoized version of that function.
function memoize(fn) {
    var cache = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = args.join(',');
        if (cache[key] !== undefined)
            return cache[key];
        return cache[key] = fn.apply(void 0, args);
    };
}
var callCount = 0;
var memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1 
