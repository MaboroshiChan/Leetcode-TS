function minRemoveToMakeValid(s: string): string {
    let l = 0;
    let r = 0;
    function twice(str:string, p : string){
        let str1 = str.split("");
        for(let i = 0; i < str1.length; ++i){
            if(str[i] == p){
                r++;
                if(r >= l){
                    r--;
                    str1.splice(i, 1);
                }
            }
        }
        return str1.join("");
    }
    s = twice(s, ")");
    s = twice(s.split("").reverse().join(""), "(").split("").reverse().join("");
    return s;
};