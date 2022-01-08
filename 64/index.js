const dirs = [
  [1, 0],
  [0, 1],
];

// 3. 记忆化搜索
var minPathSum1 = function (grid) {
  const MAX_INT = Math.pow(2, 31) - 1;
  const m = grid.length,
    n = grid[0].length;
  const memo = new Array(m).fill(0).map(() => new Array(n).fill(MAX_INT));

  const dfs = (row, col, depth) => {
    console.log(row, col, repeat("-", depth + 1) + "x");
    if (row == m - 1 && col == n - 1) return grid[row][col];

    if (memo[row][col] != MAX_INT) return memo[row][col];

    let minPathSum = MAX_INT;
    for (const dir of dirs) {
      const nextRow = row + dir[0];
      const nextCol = col + dir[1];
      console.log(nextRow, nextCol);
      if (nextRow < 0 || nextRow >= m || nextCol < 0 || nextCol >= n) continue;
      const childMinPathSum = dfs(nextRow, nextCol, depth + 1);
      console.log(
        nextRow,
        nextCol,
        repeat("=", depth + 1) + ">" + childMinPathSum
      );
      minPathSum = Math.min(minPathSum, childMinPathSum);
    }

    memo[row][col] = minPathSum + grid[row][col];
    return memo[row][col];
  };

  return dfs(0, 0, 0);
};
var testData = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

console.log(minPathSum1(testData));
//版本5：版本4的改良版本
function repeat(target, n) {
  var s = target,
    total = "";
  while (n > 0) {
    if (n % 2 == 1) {
      total += s;
    }
    if (n == 1) {
      break;
    }

    s += s;
    n = n >> 1; //相当于将n除以2取其商，或者说是开2次方
  }
  return total;
}
