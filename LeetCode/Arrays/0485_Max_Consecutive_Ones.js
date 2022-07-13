/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
  let maxCount = 0;
  let count = 0;
  for(let num of nums){
      if(num){
          count++;
          maxCount = Math.max(count, maxCount);
      }else{
      count = 0;
      }
  }


  return maxCount;
};

// Time Complexity: O(n)
// Space Complexity: O(1)

// test
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]) === 3);
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]) === 2);