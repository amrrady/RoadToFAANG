/**
 * @param {number[]} nums
 * @return {number}
 */
 var robNaive = function(nums) {
   if(nums.length === 1)
    return nums[0];

  let money = [nums[0], Math.max(nums[0], nums[1])]

  for(let i = 2; i < nums.length; i++){
    money.push(
      Math.max(money[money.length-2] + nums[i], money[money.length-1])
      );
  }

  return money[money.length - 1];
};

// Space Complexity: O(n)
// Time Complexity: O(n)


var robOptimized = function(nums) {
  let a = 0;
  let b = nums[0];
  for(let i = 1; i < nums.length; i++){
    let max = Math.max(a + nums[i], b);
    a = b;
    b = max;
  }

  return b;
};
// Compare times
let startTime = new Date();
let result = robNaive([1,2,3,1]);
let endTime = new Date();
let timeElapsed = endTime - startTime;
console.log(`robNaive of [1,2,3,1]: ${result} - Time Elapsed: ${timeElapsed}ms`);

startTime = new Date();
result = robNaive([2,7,9,3,1]);
endTime = new Date();
timeElapsed = endTime - startTime;
console.log(`robNaive of [2,7,9,3,1]: ${result} - Time Elapsed: ${timeElapsed}ms`);


// big test case random of length 10000
const arr = Array.from({length: 10000}, () => Math.floor(Math.random() * 100));

startTime = new Date();
result = robNaive(arr);
endTime = new Date();
timeElapsed = endTime - startTime;
console.log(`robNaive of the big random array: ${result} - Time Elapsed: ${timeElapsed}ms`);


startTime = new Date();
result = robOptimized([1,2,3,1]);
endTime = new Date();
timeElapsed = endTime - startTime;
console.log(`robOptimized of [1,2,3,1]: ${result} - Time Elapsed: ${timeElapsed}ms`);

startTime = new Date();
result = robOptimized([2,7,9,3,1]);
endTime = new Date();
timeElapsed = endTime - startTime;
console.log(`robOptimized of [2,7,9,3,1]: ${result} - Time Elapsed: ${timeElapsed}ms`);

startTime = new Date();
result = robOptimized(arr);
endTime = new Date();
timeElapsed = endTime - startTime;
console.log(`robOptimized of the big random array: ${result} - Time Elapsed: ${timeElapsed}ms`);


// robNaive of [1,2,3,1]: 4 - Time Elapsed: 0ms
// robNaive of [2,7,9,3,1]: 12 - Time Elapsed: 0ms
// robNaive of the big random array: 291565 - Time Elapsed: 6ms
// robOptimized of [1,2,3,1]: 4 - Time Elapsed: 0ms
// robOptimized of [2,7,9,3,1]: 12 - Time Elapsed: 0ms
// robOptimized of the big random array: 291565 - Time Elapsed: 2ms
