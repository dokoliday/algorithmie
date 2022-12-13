/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let res = true;

  const rec = (p, q) => {
      if(res===true)
      {
    if (p === null || q === null) {
       return  res = p === q;
    }

    if (p.val !== q.val) {
      return  res = false;
    } 
      rec(p.left, q.left);
      rec(p.right, q.right);}
}
  rec(p, q);
  return res;
};