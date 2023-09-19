// lets write our first failing test
const additionCalculator = require('./additionCalculator');

//test('addition of 4 and 6 to equal 10', () => {
//  expect(additionCalculator(4, 6)).toBe(10);
//});
 
describe("additionCalculatore's test cases", () => {
  test('addition of 4 and 6 to equal 10', () => {
    expect(additionCalculator(4, 6)).toBe(10);
  });
  test('addition of 100,50,20,45 and 30 to equal 245', () => {
    expect(additionCalculator(100, 50, 20, 45, 30)).toBe(245);
  });
  test('addition of 7,7 to equal 14', () => {
    expect(additionCalculator(7, 7)).toBe(14);
  });
  test('addition of no arguments provided to equal 0', () => {
    expect(additionCalculator()).toBe(0);
  });
});
