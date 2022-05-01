/**
 * @param {number} n
 * @return {number}
 */

var climbStairsNaive = (n) => {
  if(n <= 2) return n;
  return climbStairsNaive(n-1) + climbStairsNaive(n-2);
};

// Time Complexity: O(2^n)
// Space Complexity: O(n) - recursion stack

var climbStairsTopDown = (n) => {
  return dp(n);
};

var dp = (n, memo = {0:0, 1:1, 2:2}) => {
  if(n <= 2) return n;
  if(n in memo) return memo[n];
  memo[n] = dp(n-1, memo) + dp(n-2, memo);
  return memo[n];
}

// Time Complexity: O(n)
// Space Complexity: O(n + n) - recursion stack

// Gives time limit exceeded error on LeetCode

var climbStairsBottomUp = (n) => {
  const ways = [0, 1, 2];
  for(let i = 3; i <= n; i++){
    ways.push(ways[i-1] + ways[i-2]);
  }

  return ways[n];
}

// Time Complexity: O(n)
// Space Complexity: O(n) - array

// compare times for naive, top down, and bottom up

let startTime = new Date();
let result = climbStairsNaive(45);
let endTime = new Date();
let timeElapsed = endTime - startTime;
console.log(`climbStairsNaive of 45: ${result} - Time Elapsed: ${timeElapsed}ms`);

startTime = new Date();
result = climbStairsTopDown(45);
endTime = new Date();
timeElapsed = endTime - startTime;
console.log(`climbStairsTopDown of 45: ${result} - Time Elapsed: ${timeElapsed}ms`);

startTime = new Date();
result = climbStairsBottomUp(45);
endTime = new Date();
timeElapsed = endTime - startTime;
console.log(`climbStairsBottomUp of 45: ${result} - Time Elapsed: ${timeElapsed}ms`);


// climbStairsNaive of 45: 1836311903 - Time Elapsed: 14214ms
// climbStairsTopDown of 45: 1836311903 - Time Elapsed: 3ms
// climbStairsBottomUp of 45: 1836311903 - Time Elapsed: 1ms
