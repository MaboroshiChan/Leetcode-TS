function BFS_no_track(adj: {[a: number]: number[]}, size: number){
    let visited: boolean[] = Array(size).fill(false);
    let queue: number[] = [];
    let vertices = Object.keys(adj).map(s=>parseInt(s));
    if(vertices.length == 0){
        return [];
    }
    queue.push(vertices[0]);
    while(queue.length > 0){
       queue.forEach(v=>{
           // collection
           visited[v] = true;
        }); 
       queue = queue.flatMap(x=>{
           let g = adj[x];
           // Do something;
           // Do something;
           return [];
        })
    }
}