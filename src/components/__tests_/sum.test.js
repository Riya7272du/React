import { sum } from "../sum";
test("sum function should calculate teh sum of 2 numbers", () => {
    const result = sum(3, 4);

    //Assertion
    expect(result).toBe(7);
})