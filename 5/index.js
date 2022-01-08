// 5. 最长回文子串
// 给你一个字符串 s，找到 s 中最长的回文子串。

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  var len = s.length;
  var dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = [];
    dp[i][i] = true;
  }

  let maxL = 1;
  let begin = 0;
  for (let j = 1; j < len; j++) {
    for (let i = 0; i < j; i++) {
      // 判断s[i..j]是否是回文子串
      if (s[i] === s[j] && (j - i + 1 < 4 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        // 如果比以前记录的最长还长，则替换
        if (j - i + 1 > maxL) {
          maxL = j - i + 1;
          begin = i;
        }
      } else {
        dp[i][j] = false;
      }
    }
  }

  return s.slice(begin, begin + maxL);
};
longestPalindrome("babab");
