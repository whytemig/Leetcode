function repeatedNum(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i]);

    if (map.has(nums[i + 1])) {
      return nums[i + 1];
    }
  }

  return undefined;
}

// function repeatedNum(nums){
//   let map = {};
//   for(let i = 0; i < nums.length; i++){
//     if(map[nums[i]] !== undefined){
//       return nums[i]
//     }else{
//       map[nums[i]] = 1
//     }
//   }
//   return undefined
// }

console.log(repeatedNum([2, 5, 5, 2, 3, 5, 1, 2, 4]));
console.log(repeatedNum([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(repeatedNum([2, 3, 4, 5]));
