function createHelloWorld() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return "Hello World";
}
var result = createHelloWorld("Banana");
console.log(result);
var result = createHelloWorld(32);
console.log(result);
var result = createHelloWorld(false);
console.log(result);
var result = createHelloWorld(() => createHelloWorld(1));
console.log(result);
