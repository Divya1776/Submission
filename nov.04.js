//generator

function* genFour() {
    try {
        yield 1;
        yield 2;
        yield 3;
        return 4;
    } catch (err) {
        console.log('Error inside generator:', err);
    }
}

let four = genFour();

try {
    console.log(four.next()); // { value: 1, done: false }
    console.log(four.next()); // { value: 2, done: false }
    console.log(four.next()); // { value: 3, done: false }
    console.log(four.next()); // { value: 4, done: true }
} catch (err) {
    console.log('Error outside generator:', err);
}

//map
try {
    // Create a Map from letters 'a', 'b', 'c', 'd'
    let m = new Map([... 'abcd'].map(x => [x, x + x]));

    // Convert map to JSON strings
    console.log('Map as array:', JSON.stringify([...m]));
    console.log('Map keys:', JSON.stringify([...m.keys()]));
    console.log('Map values:', JSON.stringify([...m.values()]));
    console.log('Map entries:', JSON.stringify([...m.entries()]));

    // Log the Map object itself
    console.log('Map object:', m);

} catch (err) {
    console.error('An error occurred:', err);
}

function gen(n) {
    return {
        [Symbol.iterator]() {
            let i = 0;
            return {
                next() {
                    // Wrap the next step in try/catch
                    try {
                        if (i > n) {
                            return { done: true };
                        } else {
                            // Example: throw an error for demonstration
                            // if (i === 2) throw new Error("Test error");
                            return { done: false, value: i++ };
                        }
                    } catch (err) {
                        console.error("Error inside iterator:", err);
                        return { done: true }; // Stop iteration on error
                    }
                }
            };
        }
    };
}

try {
    for (let value of gen(3)) {
        console.log(value);
    }
} catch (err) {
    console.error("Error during iteration:", err);
}

//loop iterating
let arr = ['a', 'b', 'c'];

try {
    for (let i = 0; i < arr.length; i++) {
        if (arr.hasOwnProperty(i)) {
            console.log(arr[i]);
        }
    }
} catch (err) {
    console.error("Error during iteration:", err);
}
//var arr = ['a', 'b', 'c'];

try {
    for (let i in arr) {
        if (arr.hasOwnProperty(i)) {
            console.log(i);       // Logs the index: "0", "1", "2"
            console.log(arr[i]);  // Logs the value: "a", "b", "c"
        }
    }
} catch (err) {
    console.error("Error during iteration:", err);
}

