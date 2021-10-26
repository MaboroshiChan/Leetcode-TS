/**
 * 写BFS算法的时候注意要确定更新visited数组的时机。
 * 终止条件写在while里面而不是高阶函数里加break。
 * 如果是需要记录路径，那需要把queue换成二维数组。
 * @param beginWord
 * @param endWord
 * @param wordList
 * @returns shortest path from beginWord to endWord.
 */
function findLadders(beginWord, endWord, wordList) {
    var hasEdge = function (w1, w2) {
        var dif = 0;
        for (var i = 0; i < w1.length; ++i) {
            if (w1[i] != w2[i]) {
                dif += 1;
            }
        }
        return dif == 1;
    };
    // bfs 
    wordList = [beginWord].concat(wordList);
    var res = [[0]];
    var visited = Array(wordList.length).fill(false);
    var ans = [];
    while (res.length > 0) {
        res.forEach(function (arr) {
            var last = arr[arr.length - 1];
            visited[last] = true;
            if (wordList[last] == endWord) {
                ans.push(arr);
            }
        });
        console.log(res.map(function (arr) { return arr.map(function (e) { return wordList[e]; }); }));
        res = res.flatMap(function (arr) {
            var last = arr[arr.length - 1];
            var adj = wordList
                .map(function (_, i) { return i; })
                .filter(function (i) { return !visited[i]
                && hasEdge(wordList[i], wordList[last]); });
            var next = adj.map(function (v) { return arr.concat([v]); });
            return next;
        });
    }
    return ans.map(function (ans) { return ans.map(function (e) { return wordList[e]; }); });
}
;
console.log(findLadders("a", "c", ["a", "b", "c"]));
