//TODO: test reverse-string function
const reverseStringTester = require('../02-reverse-string/reverse-string')

test('should reverse a string', () => {
    expect(reverseStringTester('Word')).toBe('droW')
})