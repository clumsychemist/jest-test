const subtraction = require('./math').sub;
const addition = require('./math').add;

test('subtracts 4 - 2 to equal 2', () => {
   expect(subtraction(4, 2)).toBe(2);
});
test('subtracts 10 - 2 to equal 8', () => {
   expect(subtraction(10, 2)).toBe(8);
});
test('adds 10 + 2 to equal 12', () => {
   expect(addition(10, 2)).toBe(12);
});