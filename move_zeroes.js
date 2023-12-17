// const moveZeroes = function (nums) {
//   let left = 0;

//   for (let right = 0; right < nums.length; right++) {
//     if (nums[right] !== 0) {
//       [nums[left], nums[right]] = [nums[right], nums[left]];

//       left++;
//     }
//   }
//   return nums;
// };

// function moveZeroes(nums) {
//   // loop to go throught the ARRAY
//   // move the non zero elements to the right. In summary moving the non zeroes

//   let anothrhand = 0;
//   for (let hand = 0; hand < nums.length; hand++) {
//     if (nums[hand] !== 0) {
//       [nums[hand], nums[anothrhand]] = [nums[anothrhand], nums[hand]];
//       anothrhand++;
//     }
//   }

//   return nums;
// }

function moveZeroes(nums) {
  let position = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[position] = nums[i];
      position++;
    }
  }

  while (position < nums.length) {
    nums[position++] = 0;
  }
  return nums;
}

console.log(moveZeroes([1, 2, 0, 5]));
// console.log(moveZeroes([0, 1, 5, 0, 12, 0, 9]));
