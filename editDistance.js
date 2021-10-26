"use strict";
exports.__esModule = true;
function minDistance(word1, word2) {
    var dp = Array.from(new Array(word1.length + 1), function (_) { return new Array(word2.length + 1).fill(100000); });
    function memo(i, j) {
        console.log(i + ", " + j);
        console.log(dp);
        if (dp[i][j] < 100000)
            return dp[i][j];
        if (i == word1.length) {
            dp[i][j] = (word2.length - j);
            return (word2.length - j);
        }
        if (j == word2.length) {
            console.log(i + " " + j + ", " + dp);
            dp[i][j] = (word1.length - i);
            console.log(i + " " + j + ", " + dp);
            return dp[i][j];
        }
        if (word1[i] == word2[j]) {
            return dp[i][j] = memo(i + 1, j + 1);
        }
        return dp[i][j] = Math.min(memo(i, j + 1), memo(i + 1, j), memo(i + 1, j + 1)) + 1;
    }
    var res = memo(0, 0);
    console.log(dp);
    return res;
}
;
function fib(n) {
    var dp = Array(n).fill(-1);
    function memo(i) {
        if (i <= 1)
            return dp[i] = 1;
        if (dp[i] >= 0)
            return dp[i];
        return dp[i] = memo(i - 1) + memo(i - 2);
    }
    return memo(n);
}
console.log(minDistance("a", "m"));
console.log(fib(30));
