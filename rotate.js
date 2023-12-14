// const rotate = function (nums, k) {
//   //splice method
//   k = k % nums.length;
//   let end = nums.splice(nums.length - k, k);
//   nums.unshift(...end);

//   return nums;
// };

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// this method requires two function

const rotate = (nums, k) => {
  k % nums.length;

  if (k === 0 || nums.length === 0 || nums.length === 1) return nums;

  nums = nums.reverse();
  // build in reverse function
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
};

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
