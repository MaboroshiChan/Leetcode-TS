import { func } from "prop-types";

function isMatch(s: string, p: string): boolean {
    let dp: number[][] = Array(s.length + 1).fill(Array(p.length + 1).fill(-1));
    let match = (i: number, j: number)=>{
        if(dp[i][j] = -1) return dp[i][j];
    };
    return false;
};