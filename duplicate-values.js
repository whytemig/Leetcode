// var containsDuplicate = function (nums) {
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) return true;
//   }
//   return false;
// };

function containsDuplicate(nums) {
  let unique = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (unique.has(nums[i])) {
      return true;
    }
    unique.add(nums[i]);
  }

  return false;
}

console.log(containsDuplicate([1, 2, 4, 8, 9, 2, 4, 22, 3]));
