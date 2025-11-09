import { handleError } from "./utils";

export async function async(): Promise<void> {
  try {
    const rating: number[] = [5, 4, 5];
    let sum = 0;

    const asyncSum = async (a: number, b: number): Promise<number> => a + b;

    for (const r of rating) {
      sum = await asyncSum(sum, r);
      console.log("Partial sum:", sum);
    }

    console.log("Final sum:", sum);
  } catch (err) {
    handleError("async", err);
  }
}