// Test case for the empty string
const { add } = require('../src/stringCalculator.js')

test('empty string returns 0', () => {
    expect(add("")).toBe(0)
})

test('single number returns the number itself', () => {
    expect(add('5')).toBe(5)
})

test('two numbers return their sum', () => {
    expect(add("1,5")).toBe(6)
})

test('multiple numbers return their sum', () => {
    expect(add("1,5,6")).toBe(12)
})

test('new line between the numbers is also a valid seperator', () => {
    expect(add("1\n2, 4")).toBe(7)
})

test('custom delimiter works', () => {
    expect(add("//;\n1;2")).toBe(3)
})

test('throws error when a negative number is present', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2")
})

test('throws error with multiple negative numbers', () => {
    expect(() => add("1,-2,-3,4")).toThrow("negative numbers not allowed -2,-3")
})