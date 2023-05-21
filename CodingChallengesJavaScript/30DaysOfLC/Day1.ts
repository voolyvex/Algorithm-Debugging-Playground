const createHelloWorld = function() {
    return (...args: any[]) => "Hello World";
};

let result = createHelloWorld();

console.log(result([]));

console.log(result([{}, null, 42]));

console.log(result("Banana"));

console.log(result(32));

console.log(result(false));



