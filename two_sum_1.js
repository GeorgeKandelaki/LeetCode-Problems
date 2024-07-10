// 1
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let x = 0; x < nums.length; x++) {
      if (nums[i] + nums[x] === target && i !== x) {
        return [i, x];
      }
    }
  }
};

// Second Solution
const twoSum2 = function (nums, target) {
  const tarInd = [];
  for (let i = 0; i < nums.length; i++) {
    for (let x = 0; x < nums.length; x++) {
      if (nums[i] + nums[x] === target && i !== x) {
        tarInd.push(i, x);
      }
    }
  }
  return Array.from(new Set(tarInd));
};

console.log(twoSum([3, 3], 6));
console.log(twoSum2([3, 3], 6));
