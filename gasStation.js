/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let gasTally = 0;
  let tank = 0;
  let startingStation = 0;

  for (let i = 0; i < gas.length; i++) {
    const gasGained = gas[i] - cost[i];

    gasTally += gasGained;
    tank += gasGained;

    if (tank < 0) {
      //new starting station
      startingStation = i + 1;
      tank = 0;
    }
  }
  return gasTally < 0 ? -1 : startingStation;
};

module.exports = canCompleteCircuit;
