/**
 * @param {number[]} nums
 * @return {number}
 */


// @REF : /images/0740_Delete_and_Earn.png

 var deleteAndEarn = function(nums) {
   let count = {};
   for(let num of nums){
     count[num] = num in count ? ++count[num] : 1;
   }

   const uniqueArr = Array.from(new Set(nums)).sort((a, b) => { return a - b;});

   let earnA = 0, earnB = 0, tempB = 0, currentEarn = 0;
   for(let i = 0; i < uniqueArr.length; i++){
      currentEarn = count[uniqueArr[i]] * uniqueArr[i];

      tempB = earnB;
      if(i > 0 && uniqueArr[i] === (uniqueArr[i-1] + 1)){
        earnB = Math.max(earnA + currentEarn, earnB);
      }else{
        earnB += currentEarn;
      }
      earnA = tempB;
   }

   return earnB;
};


// Space Complexity: O(n)
// Time Complexity: O(n)

// Compare times
let startTime = new Date();
let result = deleteAndEarn([2,2,3,3,3,4]); // 9
let endTime = new Date();
let timeElapsed = endTime - startTime;
console.log(`deleteAndEarn of [2,2,3,3,3,4] is ${result} and timeElapsed is ${timeElapsed}`);
