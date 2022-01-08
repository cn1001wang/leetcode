/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  let count0 = [],
    count1 = [],
    sum0 = 0,
    sum1 = 0;
  strs.forEach(function (str, i) {
    count0[i] = str.split("").filter((o) => o == "0").length;
    count1[i] = str.split("").filter((o) => o == "1").length;
    sum0 += count0[i];
    sum1 += count1[i];
  });

  const len = strs.length;

  const dp = new Array(len)
    .fill(0)
    .map((o) => new Array(sum0 * sum1).fill(false));

  for (let i = 0; i <= len; i++) {
    dp[0][i] = true;
  }

  
};
var strs = ["10", "0001", "111001", "1", "0"],
  m = 5,
  n = 3;

findMaxForm(strs, m, n);
