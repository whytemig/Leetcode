// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

function twoSum(nums, target) {
  let result = new Map();
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let remainder = target - nums[i];

    if (result.has(remainder) && remainder > 0) {
      return [result.get(remainder), i];
    }
    result.set(nums[i], i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
