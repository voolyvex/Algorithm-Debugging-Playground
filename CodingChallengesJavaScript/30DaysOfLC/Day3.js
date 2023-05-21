// Write a function createCounter. It should accept an initial integer init. It should return an object with the following three functions:
function createCounter2(init) {
    var counter = init;
    return {
        increment: function () {
            counter++;
            return counter;
        },
        decrement: function () {
            counter--;
            return counter;
        },
        reset: function () {
            counter = init;
            return counter;
        }
    };
}
;
var counter2 = createCounter2(5);
console.log(counter2.increment()); // 6
console.log(counter2.reset()); // 5
console.log(counter2.decrement()); // 4
