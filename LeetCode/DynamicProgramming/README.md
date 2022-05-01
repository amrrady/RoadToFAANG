#Dynamic Programming

Characteristics:
: 1. the problem can be broken down into "overlapping subproblems"
	2. The optimal solution can be formed from optimal solutions to its overlapping subproblems.

Example:
: Fibonacci number is a sequence of numbers that starts with 0 and 1, and each subsequent number is the sum of the previous two numbers. F(n) = F(n-1) + F(n-2) for n > 1.

	which means the problem has optimal substructure, since a solution F(n) **can be formed from the solu 	tions to the subproblems** F(n-1) + F(n-2). **These subproblems are also overlapping** since we would need F(4) to calculate both F(5) and F(6).

Dynamic Programming vs. Greedy Algorithm:
: Dynamic Programming is a greedy algorithm that is based on the idea of overlapping subproblems. Greedy problems by themselves are NOT overlapping.

Dynamic Programming vs. Divide and Conquer:
: Dynamic Programming is a divide and conquer algorithm that are based on the idea of overlapping subproblems. Divide and conquer problems by themselves are NOT overlapping.

Dynamic Programming algorithm implementation:
: 1. Bottom-up approach: Tabulation
	1. Top-down approach: Memoization

Bottom-up approach (Tabulation):
	: is implemented with iteration and starts at the base cases.

Top-down approach (Memoization):
	: is implemented with recursion and made efficient with memoization.

Memoization:
: is a technique to speed up the execution of a function by storing its results. memoizing a result means to store the result of a function call, usually in a hashmap or an array, so that when the same function call is made again, we can simply return the memoized result instead of recalculating the result.

Which is better, Top-down or Bottom-up?
: * A bottom-up implementation's runtime is usually faster, as iteration does not have the overhead that recursion does.
: * A top-down implementation's runtime is usually slower, as recursion does not have the overhead that iteration does.

Dynamic Programming problem's characteristics:
: 1. The problem will ask for the optimum value (maximum or minimum) of something, or the number of ways there are to do something. For example:

		* What is the minimum cost of doing...
		* What is the maximum profit from...
		* How many ways are there to do...
		* What is the longest possible...
		* Is it possible to reach a certain point...
: 2. The future "decisions" depend on earlier decisions. Deciding to do something at one step may affect the ability to do something in a later step. This characteristic is what makes a greedy algorithm invalid for a DP problem - we need to factor in results from previous decisions. [^1]

[^1]: When you're solving a problem on your own and trying to decide if the second characteristic is applicable, assume it isn't, then try to think of a counterexample that proves a greedy algorithm won't work. If you can think of an example where earlier decisions affect future decisions, then DP is applicable.


### A Framework for DP Problems

State:
: In a DP problem, a **state** is a set of variables that can sufficiently describe a scenario. These variables are called **state variables**, and we only care about relevant ones. For example, to describe every scenario in Climbing Stairs, there is only 1 relevant state variable, the current step we are on. We can denote this with an integer **i**. If **i** = 6, that means that we are describing the state of being on the 6th step. Every unique value of **i** represents a unique state.

To solve a DP problem, we need to combine 3 things:
: 1. A function or data structure that will compute/contain the answer to the problem for every given state.
: 2. A recurrence relation to transition between states. An Example of a recurrence relation:
		* F(n) = F(n-1) + F(n-2)
: 3. Base cases, so that our recurrence relation doesn't go on infinitely.

The Climbing Stairs problem:
: You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

	Example 1:
	: Input: 3
	: Output: 3
	: Explanation: There are three ways to climb to the top.
	: 1. 1 step + 1 step + 1 step
	: 2. 1 step + 2 steps
	: 3. 2 steps + 1 step

	Code:
	: ```js
	 	function climbStairs(n, memo = {}) {
		  if (n in memo) return memo[n];
		  if (n === 1) return 1; // Base cases
		  if (n === 2) return 2; // Base cases
		  // Recurrence relation
		  return memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
		}
		```