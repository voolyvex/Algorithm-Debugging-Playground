// Write a function createCounter. It should accept an initial integer init. It should return an object with the following three functions:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter2(init: number): ReturnObj {
    let counter = init;

    return {
        increment: () => {
            counter++;
            return counter;
        },
        decrement: () => {
            counter--;
            return counter;
        },
        reset: () => {
            counter = init;
            return counter;
        }
    };
};


const counter2 = createCounter2(5)
console.log(counter2.increment()); // 6
console.log(counter2.reset()); // 5
console.log(counter2.decrement()); // 4