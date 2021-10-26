function intersect(nums1: number[], nums2: number[]): number[] {
    var dict = {};
    var res = [];
    nums1.forEach(x=>{
        if(!(x in dict)){
            dict[x] = 1;
        }else{
            dict[x] += 1;
        }
    })
    nums2.forEach(x=>{
        if(x in dict){
           res.push(x);
           dict[x] -= 1;
           if(dict[x] == 0){
               delete dict[x];
           }
        }
    })
    return res;
};

console.log(intersect([1,2,2,1], [2,2]))