class SparseVector {
    
    vec : { [num: number] : number };

    constructor(nums: number[]) {
        this.vec = {};
		nums.forEach((val, index)=>{
            if(val != 0){
                this.vec[index] = val;
            }
        });
    }

	// Return the dotProduct of two sparse vectors
    dotProduct(vec: SparseVector): number {
        let res: number = 0;
		Object.keys(vec.vec).forEach(x=>{
            let ix = parseInt(x);
            if(ix in this.vec){
                res += vec.vec[ix] * this.vec[ix];
            }
        });
        return res;
    }
}