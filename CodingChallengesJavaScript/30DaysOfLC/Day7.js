// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
function compose(functions) {
    return function (x) {
        if (functions.length === 0)
            return x;
        var input = x;
        for (var _i = 0, _a = functions.reverse(); _i < _a.length; _i++) {
            var func = _a[_i];
            input = func(input);
        }
        return input;
    };
}
;
var testfn = compose([function (x) { return 10 * x; }, function (x) { return 10 * x; }, function (x) { return 10 * x; }]);
console.log(testfn(1));
