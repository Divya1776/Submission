import { sayHello, dollarFunction, blockExample } from "./module/function";
import { Jedi, Sith, oopsExample } from "./module/oops";
import { array, customarrayExample } from "./module/array";
import { basicGenerator, flattenGenerator } from "./module/generator";
import { async } from "./module/async";
import { symbolExamples } from "./module/symbol";
  

function printSection(title: string): void {
  const line = "=".repeat(50);
  console.log(`\n${line}\n🔹 ${title}\n${line}`);
}

console.log("===  TypeScript Modular Playground Started ===");

(async () => {
  try {
    printSection("FUNCTIONS MODULE");
    sayHello("divya");
    dollarFunction();
    blockExample();

    printSection("ITERATORS MODULE");
    array();
    customarrayExample();

    printSection("SYMBOLS MODULE");
    symbolExamples();

    printSection("OOPS MODULE");
    oopsExample();
    const yoda = new Jedi();
    const vader = new Sith();
    console.log("Direct Class Test:");
    console.log(`${yoda}`);
    console.log(`${vader}`);

    printSection("GENERATORS MODULE");
    basicGenerator();
    flattenGenerator();

    printSection("ASYNC / AWAIT MODULE");
    await async();

  } catch (err) {
    console.error(" [index.ts] Fatal Error:", (err as Error).message);
  }
})();

console.log("\n=== Execution Completed ===");