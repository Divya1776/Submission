import { sayHello, dollarFunction, blockExample } from './modules/functions.js';
import { Jedi, Sith, oops } from './modules/oops.js';
import { array, customarray } from './modules/array.js';
import { basicGenerator, flattenGenerator } from './modules/generators.js';
import { async } from './modules/async.js';
import { symbol } from './modules/symbols.js';


//Helper to format section headers
function printSection(title) {
    const line = "=".repeat(50);
    console.log(`\n${line}\n🔹 ${title}\n${line}`);
}

console.log("=== 🚀 JavaScript Modular Playground Started ===");

try {
    // 1. Functions
    printSection("FUNCTIONS MODULE");
    sayHello("divya");
    dollarFunction();
    blockExample();

    // 2️.array
    printSection("array MODULE");
    array();
    customarray();

    // 3.Symbols
    printSection("SYMBOLS MODULE");
    symbol();

    // 4.OOP (Jedi / Sith)
    printSection("OOPS MODULE");
    oops();
    const yoda = new Jedi();
    const vader = new Sith();
    console.log("Direct Class Test:");
    console.log(`${yoda}`);
    console.log(`${vader}`);

    // 5. Generators
    printSection("GENERATORS MODULE");
    basicGenerator();
    flattenGenerator();

    // 6. Async
    printSection("ASYNC / AWAIT MODULE");
    await async();

    
} catch (err) {
    console.error("🔥 [index.js] Fatal Error:", err.message);
}

console.log("\n=== Execution Completed ===");