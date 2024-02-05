const capitalize = require('./capitalize')

test('should (have first letter capitalized)', () => {
    expect(capitalize('tomf')).toMatch(/^[A-Z][a-z]/)
})

test('should capitalize first letter of neno', () => {
    expect(capitalize('neno')).toBe('Neno')
})