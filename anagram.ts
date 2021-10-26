function findAnagrams(s: string, p: string): number[] {
    const toDict = (str: string) => {
        let dict: {[s: string]: number} = {};
        str.split("").forEach(x=>{
            if(x in dict){
                dict[x] += 1;
            }
            else{
                dict[x] = 1;
            }
        });
        return dict;
    };
    let res = []
    let pDict = toDict(p);
    for(let i = 0; i < s.length; ++i){
        let substr = s.substring(i, p.length);
        let subDict = toDict(substr);
        if(_.isEqual(subDict, pDict)){
            res.push(i);
        }
    }
    return res;
};