/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
  const squaredNums =  new Array(nums.length);
  
  let left = 0, right = nums.length - 1;
  let index = nums.length - 1;
  while(left <= right){
      if(Math.abs(nums[left]) > Math.abs(nums[right])){
          squaredNums[index] = nums[left] * nums[left];
          left++;
      }else{
          squaredNums[index] = nums[right] * nums[right];
          right--;
      }

      index--;
  }

  return squaredNums;
};

// Time Complexity: O(n)
// Space Complexity: O(n)

// test
console.log(sortedSquares([-4,-1,0,3,10]).toString() === [0, 1, 9, 16, 100].toString());
console.log(sortedSquares([-7,-3,2,3,11]).toString() === [4, 9, 9, 49, 121].toString());