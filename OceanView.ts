function findBuildings(heights: number[]): number[] {
    if(heights.length == 0) return [];
    let res: number[] = [];
    let max_h: number = -Infinity;
    for(let i = heights.length; i >= 0; --i){
        if(heights[i] > max_h){
            res.push(heights[i]);
        }
        max_h = Math.max(max_h, heights[i]);
    }
    return res.reverse();
};