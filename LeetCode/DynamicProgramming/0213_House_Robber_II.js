/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    // for arrr [2, 3, 2]
    // we run once on subarray [2, 3] without the last element
    // we run once on subarray [3, 2] without the first element
    // we return the max
    if(nums.length === 1)
      return nums[0];
    return Math.max(robOptimized(nums, 0, nums.length - 1), robOptimized(nums, 1, nums.length));
};

var robOptimized = function(nums, start = 0, end = nums.length){
  let a = 0;
  let b = nums[start];
  for(let i = start + 1; i < end; i++){
    let max = Math.max(a + nums[i], b);
    a = b;
    b = max;
  }

  return b;
};

// Space Complexity: O(1)
// Time Complexity: O(n)

// Compare times
let startTime = new Date();
let result = rob([2,3,2]);
let endTime = new Date();
let timeElapsed = endTime - startTime;
console.log(`rob of [2,3,2]: ${result} - Time Elapsed: ${timeElapsed}ms`);


