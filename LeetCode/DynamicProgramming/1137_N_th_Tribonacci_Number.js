/**
 * @param {number} n
 * @return {number}
 */

var tribonacci = function(n) {
  const arr = [0, 1, 1];
  for(let i = 3; i <= n; i++){
    arr.push(arr[i-3] + arr[i-2] + arr[i-1]);
  }

  return arr[n];
};


// space complexity: O(n)
// time complexity: O(n)

// compare times
let startTime = new Date();
let result = tribonacci(45);
let endTime = new Date();
let timeElapsed = endTime - startTime;
console.log(`tribonacci of 45: ${result} - Time Elapsed: ${timeElapsed}ms`);
