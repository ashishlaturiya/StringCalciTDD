// Test case for the empty string
const { add } = require('../src/stringCalculator.js')

test('single number returns the number itself', () => {
    expect(add('5')).toBe(5)
})