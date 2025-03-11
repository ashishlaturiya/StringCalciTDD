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