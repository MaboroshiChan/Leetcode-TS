function combinationSum(candidates: number[], target: number): number[][] {
    let res = [];
    function backtrack(curr: number[], target: number ,index: number){
        if(index >= candidates.length) return;
        if(target == 0){
            res.push(curr);
            return;
        }
        else{
            let v = candidates[index];
            let new_tar = target - v;
            if(new_tar >= 0){
                let concat = curr.concat([v]);
                backtrack(concat, new_tar, index);
               if(index < candidates.length) backtrack(concat, new_tar, index + 1);
               if(index < candidates.length) backtrack(curr, target, index + 1);
            }
        }
    }
    backtrack([], target ,0);
    return res;
};