var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 4, 8, 9, 2, 4, 22, 3]));
