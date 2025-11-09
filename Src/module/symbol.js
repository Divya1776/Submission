import { handleError } from './utils.js';

export function symbol() {
    try {
        let s1 = Symbol("DL");
        let s2 = Symbol("DL");
        console.log("s1 === s2:", s1 === s2);
        let s3 = s1;
        console.log("s1 === s3:", s1 === s3);

        const js_obj = {
            name: "DL",
            age: 25,
            [Symbol.toPrimitive](hint) {
                if (hint === "string") return "Hint: guess over 30";
                if (hint === "number") return 20;
                return "somewhere between 20 and 30";
            }
        };
        console.log(`${js_obj}`);
        console.log(js_obj + '');
        console.log(+js_obj);
    } catch (err) {
        handleError("symbol", err);
    }
}