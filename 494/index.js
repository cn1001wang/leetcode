/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((a, b) => a + b, 0);
  const len = nums.length;
  var dp = new Array(len + 1)
    .fill(0)
    .map((o) => new Array(2 * sum + 1).fill(0));

  // 初始化dp
  // 0个数求和为0，有一种方法；
  dp[0][sum] = 1;
  // i表示nums下标
  for (let i = 1; i <= len; i++) {
    let cur = nums[i - 1];
    for (let j = -sum; j <= sum; j++) {
      // 去除越界的
      // dp[i + 1][j + sum] = dp[i - 1][j - cur + sum] + dp[i - 1][j + cur + sum];
      if (j - cur + sum >= 0) {
        dp[i][j + sum] += dp[i - 1][j - cur + sum];
      }
      if (j + cur + sum < 2 * sum + 1) {
        dp[i][j + sum] += dp[i - 1][j + cur + sum];
      }
    }
  }
  return dp[len][target+sum];
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
