var createHelloWorld = function () {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return "Hello World";
    };
};
var result = createHelloWorld();
console.log(result([]));
console.log(result([{}, null, 42]));
console.log(result("Banana"));
console.log(result(32));
console.log(result(false));
