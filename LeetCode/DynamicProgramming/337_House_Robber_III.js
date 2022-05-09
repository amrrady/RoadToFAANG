/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// @REF : /images/337_House_Robber_III.png

 var rob = function(root) {
  return Math.max(...dp(root));
};

var dp = (root) => {
  if(!root)
      return [0, 0];

  const [leftRootRob, leftRootNotRob] = dp(root.left);
  const [rightRootRob, rightRootNotRob] = dp(root.right);

  const withRoot = root.val + leftRootNotRob + rightRootNotRob;
  const withoutRoot = Math.max(leftRootRob, leftRootNotRob) + Math.max(rightRootRob, rightRootNotRob);

  return [withRoot, withoutRoot];
}

// Space Complexity: O(n)
// Time Complexity: O(n)

