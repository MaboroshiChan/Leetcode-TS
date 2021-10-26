/**
 * 写BFS算法的时候注意要确定更新visited数组的时机。
 * 终止条件写在while里面而不是高阶函数里加break。
 * 如果是需要记录路径，那需要把queue换成二维数组,
 * 将符合要求的结果写入新的Array.
 * @param beginWord 
 * @param endWord 
 * @param wordList 
 * @returns shortest path from beginWord to endWord.
 */
function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
    const hasEdge = (w1: string, w2: string): boolean=>{
        var dif = 0;
        for(var i = 0; i < w1.length;++i){
            if(w1[i] != w2[i]){
                dif += 1;
            }
        }
        return dif == 1;
    }
    // bfs 
    wordList = [beginWord].concat(wordList);
    let queue: number[][] = [[0]];
    let visited = Array(wordList.length).fill(false);
    let ans: number[][] = [];
    while(queue.length > 0){
        queue.forEach(arr=>{
            let last = arr[arr.length - 1];
            visited[last] = true;
            if(wordList[last] == endWord){
                ans.push(arr);
            }
        });
        queue = queue.flatMap(arr=>{
           let last: number = arr[arr.length - 1];
           let adj: number[] = wordList
               .map((_,i)=>i)
               .filter(i=>!visited[i] 
            && hasEdge(wordList[i], wordList[last]));
           let next: number[][] = adj.map(v=>arr.concat([v]));
           return next;
       });
    }
    return ans.map(ans=>ans.map(e=>wordList[e]));
};

console.log(findLadders("a", "c", ["a", "b", "c"]));