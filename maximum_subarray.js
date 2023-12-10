// Given an integer array nums, find the subarray
//  with the largest sum, and return its sum.

// [1,-2,3,7,-4,-5,6,-10,]

function theMax(nums) {
  let maxNum = nums[0];
  let sum = 0;
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];

    if (sum >= maxNum) {
      maxNum = sum;
    } else if (sum < 0) {
      sum = 0;
    }

    maxNum = Math.max(maxNum, sum);
  }

  return maxNum;
}

console.log(theMax([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
