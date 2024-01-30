import {describe, it, expect} from "vitest"
import { fizzBuzz, calculateAverage, max, factorial } from ".."


describe("fizzBuzz", () => {
    it("should return FizzBuzz if arg is divisible by 3 and 5", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz")
    }),
    it("should return Fizz if arg is divisible by 3", () => {
        expect(fizzBuzz(9)).toBe("Fizz")
    }),
    it("should return Buzz if arg is divisible by 5", () => {
        expect(fizzBuzz(10)).toBe("Buzz")
    }),
    it("should return number if neither of the above", () => {
        expect(fizzBuzz(1)).toBe("1")
    })
})

describe("calculateAverage", () => {
    it("should return 0 if arr is empty", () => {
        expect(calculateAverage([])).toBe(0)
    }),
    it("should return average of numbers if arr is given", () => {
        expect(calculateAverage([1, 2, 3])).toBe(2)
    })
})

describe("max", () => {
    it("should return NaN if arr is empty", () => {
        expect(max([])).toBe(NaN)
    }),
    it("should return max number if arr is given", () => {
        expect(max([1, 2, 3])).toBe(3)
    })
})

describe("factorial", () => {
    it("should return factorial of number", () => {
        expect(factorial(0)).toBe(1)
        expect(factorial(1)).toBe(1)
        expect(factorial(5)).toBe(120)
    }),
    it("should return NaN if number is less than 0", () => {
        expect(factorial(-1)).toBe(NaN)
    })
})