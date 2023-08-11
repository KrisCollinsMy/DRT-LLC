const canCompleteCircuit = require("./gasStation");

test("Converts Roman numerals to integers", () => {
  expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toBe(3);
  expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toBe(-1);
  expect(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1])).toBe(4);
});
