"use strict";
exports.__esModule = true;
function wordBreak(s, wordDict) {
    var res = [];
    var recursion = function (ss, curr) {
        if (ss == "") {
            res.push(curr);
        }
        wordDict.forEach(function (word) {
            if (ss.startsWith(word)) {
                var sss = ss.slice(word.length);
                var new_curr = curr.concat([word]);
                recursion(sss, new_curr);
            }
        });
    };
    recursion(s, []);
    return res.map(function (x) { return x.join(" "); });
}
;
console.log(wordBreak("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"]));
