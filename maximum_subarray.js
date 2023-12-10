// Given an integer array nums, find the subarray
//  with the largest sum, and return its sum.

// [1,-2,3,7,-4,-5,6,-10,]

const theMaxSum = (nums) => {
  let sum = 0;
  let theMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];

    if (sum >= theMax) {
      theMax = sum;
    } else if (sum < 0) {
      //SINCE IT'S LESS THAN ZERO. WHY KEEP IT IN THE ADDED SUM, SO WE CONVERT IT BACK TO 0. AND START OVER WITH THE ADDITION OPERATION.
      sum = 0;
    }

    theMax = Math.max(sum, theMax);
  }

  return theMax;
};

console.log(theMaxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
