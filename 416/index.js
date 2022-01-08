/**
 * @param {number[]} nums
 * @return {boolean}
 * 输入：nums = [1,5,11,5]
 * 输出：true
 * 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
 */

// 第一版没考虑空间限制，第二版改成只使用长度为2的二维数组
var canPartition = function (nums) {
  // 求总和
  var sum = nums.reduce((a, b) => a + b, 0);
  // 奇数一定为false
  if (sum % 2 == 1) return false;

  var target = sum / 2;
  var length = nums.length;
  var dp = new Array(2).fill(0).map((o) => new Array(target + 1).fill(false));

  for (let i = 0; i < 2; i++) {
    dp[i][0] = true;
  }
  console.log(JSON.stringify(dp));

  for (let i = 0; i < length; i++) {
    for (let j = 1; j <= target; j++) {
      // 要不要装第i个数
      let cur = nums[i];
      let remainder = j - cur;
      let curIndex = i % 2;
      let nextIndex = (i + 1) % 2;
      if (remainder < 0) {
        // 一定不装
        dp[nextIndex][j] = dp[curIndex][j];
      } else if (remainder === 0) {
        dp[nextIndex][j] = true;
      } else {
        // 够装下
        // 当前项等于 不装他时状态 || 装他时 j-cur
        dp[nextIndex][j] = dp[curIndex][j] || dp[curIndex][j - cur];
      }
      // if (j == 1) console.log("nextIndex", nextIndex);
      if (i == length - 1 && j == target) {
        // console.log(nextIndex);
        return  dp[nextIndex][j]
      }
    }
  }

  return dp[length % 2][target];
};

canPartition([1, 5, 11, 5]);
