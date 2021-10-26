class NumMatrix {
    prefixRow: number[][];

    private prefixSum = (vec: number[]): number[]=>{
        let tmp = 0;
        let res = Array(vec.length).fill(0);
        vec.forEach((x, ix)=>{
            tmp += x;
            res[ix] = tmp;
        });
        return res;
    };

    constructor(matrix: number[][]) {
        let row: number = 0;
        let col: number = 0;
        this.prefixRow = Array(matrix.length).fill(Array(matrix[0].length).fill(0));
        this.prefixRow.map((arr, iarr)=>this.prefixSum(matrix[iarr]));
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        let res: number = 0;
        for(let i = row1; i <= row2; ++i){
            res += this.prefixRow[i][col2] - this.prefixRow[i][col1];
        }
        return res;
    }
}