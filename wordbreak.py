from types import List

class Solution:
    def wordBreak(self, s: str, wordDict):
        def backtrack(res, ss):
            if ss == "":
                return res
            for w in wordDict:
                if ss.startswith(w):
                    tt = ss[len(w) - 1 :]
                    backtrack()
            
            return 0
        return 0

    def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
        def hasEdge(word1: str, word2: str)->bool:
            cnt = 0
            for i in range(len(word1)):
                if word1[i] != word2[i]:
                    cnt += 1
            return cnt == 1
        
        res = []
        visited = []
        def search(start, visited, path, res):
            pass 
            

        return res


sol = Solution()
r = sol.wordBreak("catsanddog", ["cat","cats","and","sand","dog"])
print(r)

