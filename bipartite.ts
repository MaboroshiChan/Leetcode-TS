function isBipartite(graph: number[][]): boolean {
    if(graph.length == 0){
        return true;
    }
    let visited = Array(graph.length).fill(0);
    let res = true;
    visited.forEach((isVisited, index)=>{
        if(isVisited == 0){
            let queue: number[] = [index];
            visited[index] = 1;
            while(queue.length > 0){
                queue = queue.flatMap(x=>{
                    let adj = graph[x];
                    adj.forEach(vertex=>{
                        if(visited[vertex] != 0 
                        && visited[vertex] * visited[x] == 1){
                            res = false;
                        } 
                    });
                    adj = adj.filter(v=>visited[v]==0);
                    adj.forEach(v=>{visited[v] = -visited[x]});
                    return adj;
                });
            }
        }
    })
    return res;
};