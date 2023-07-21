async function promiseAll<T>(functions: (() => Promise<T>)[]): Promise<T[]> {
    return new Promise<T[]>((resolve, reject) => {
        const results: T[] = [];
        let countResolved: number = 0;

        for (let i = 0; i < functions.length; i++) {
            functions[i]().then((result) => {
                results[i] = result;
                countResolved++;
                if (countResolved === functions.length) {
                    resolve(results);
                }
            }).catch((error) => {
                reject(error);
            });
        }
    });
};



 const promiser = promiseAll([() => new Promise(resolve => setTimeout(() => resolve(4), 50)), () => new Promise(resolve => setTimeout(() => resolve(10), 150)), () => new Promise(resolve => setTimeout(() => resolve(16), 100))]);
 promiser.then(console.log); // [42]
