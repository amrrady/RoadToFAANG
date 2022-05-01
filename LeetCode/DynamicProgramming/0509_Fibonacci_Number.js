/**
 * @param {number} n
 * @return {number}
 */

var fibNaiive = (n) => {
  if(n <= 2) return n;
  return fibNaiive(n-1) + fibNaiive(n-2);
};

// Space Complexity: O(n) - recursion stack
// Time Complexity: O(2^n)


 var fibTopDown = (n) => {
  return dp(n);
};

var dp = (n, memo = {0:0, 1:1, 2:1}) => {
  if(n in memo) return memo[n];
  memo[n] = dp(n-1, memo) + dp(n-2, memo);
  return memo[n];
}

// Space Complexity: O(n + n) - recursion stack, map
// Time Complexity: O(n)

var fibBottomUp = (n) => {
  const ways = [0, 1, 1];
  for(let i = 3; i <= n; i++){
    ways.push(ways[i-1] + ways[i-2]);
  }

  return ways[n];
}

// Space Complexity: O(n) - array
// Time Complexity: O(n)

// compare times for naive, top down, and bottom up
let startTime = new Date();
let result = fibNaiive(45);
let endTime = new Date();
let timeElapsed = endTime - startTime;
console.log(`fibNaiive of 45: ${result} - Time Elapsed: ${timeElapsed}ms`);

startTime = new Date();
result = fibTopDown(45);
endTime = new Date();
timeElapsed = endTime - startTime;
console.log(`fibTopDown of 45: ${result} - Time Elapsed: ${timeElapsed}ms`);

startTime = new Date();
result = fibBottomUp(45);
endTime = new Date();
timeElapsed = endTime - startTime;
console.log(`fibBottomUp of 45: ${result} - Time Elapsed: ${timeElapsed}ms`);


// fibNaiive of 45: 1836311903 - Time Elapsed: 13999ms
// fibTopDown of 45: 1134903170 - Time Elapsed: 4ms
// fibBottomUp of 45: 1134903170 - Time Elapsed: 0ms
