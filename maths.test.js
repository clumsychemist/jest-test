const subtraction = require('./subtraction');
test('subtracts 4 - 2 to equal 2', () => {
   expect(subtraction(4, 2)).toBe(2);
});
test('subtracts 10 - 2 to equal 8', () => {
   expect(subtraction(10, 2)).toBe(8);
});

const addition = require('./addition');
test('adds 10 + 2 to equal 12', () => {
   expect(addition(10, 2)).toBe(12);
});