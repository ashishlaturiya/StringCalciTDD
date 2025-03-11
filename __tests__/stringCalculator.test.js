// Test case for the empty string
const { add } = require('../src/stringCalculator.js')

test('empty string returns 0', () => {
    expect(add("")).toBe(0)
})