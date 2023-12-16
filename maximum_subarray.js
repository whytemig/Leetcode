// Given an integer array nums, find the subarray
//  with the largest sum, and return its sum.

// [1,-2,3,7,-4,-5,6,-10,]

// function theMax(nums) {
//   let maxNum = nums[0];
//   let sum = 0;
//   for (let i = 1; i < nums.length; i++) {
//     sum += nums[i];

//     if (sum >= maxNum) {
//       maxNum = sum;
//     } else if (sum < 0) {
//       // we reset the sum to ZERO to avoid negative int.
//       sum = 0;
//     }

//     maxNum = Math.max(maxNum, sum);
//   }

//   return maxNum;
// }

// var maxSubArray = function (nums) {
//   let maxSum = nums[0];
//   let sum = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     // start with 2nd element.
//     sum = Math.max(nums[i], nums[i] + sum);
//     if (sum > maxSum) maxSum = sum;
//   }
//   return maxSum;
// };

const theMax = (nums) => {
  // this method is called MEMORIZATION.
  let theSum = nums[0];
  let newMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    theSum = Math.max(nums[i], nums[i] + theSum);

    newMax = Math.max(newMax, theSum);
  }
  return newMax;
};

console.log(theMax([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
