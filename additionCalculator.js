// run `node index.js` in the terminal

// console.log(`Hello Node.js v${process.versions.node}!`);

function additionCalculator(...numbers) {
  return numbers.reduce((sum, item) => sum + item, 0);
}

module.exports = additionCalculator;
