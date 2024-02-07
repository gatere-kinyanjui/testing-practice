const capitalizeTester = require('./capitalize')

test('should (have first letter capitalized)', () => {
    expect(capitalizeTester('tomf')).toMatch(/^[A-Z][a-z]/)
})

test('should capitalize first letter of neno', () => {
    expect(capitalizeTester('neno')).toBe('Neno')
})