function isAlienSorted(words: string[], order: string): boolean {
    if(words.length <= 1) return true;
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let dict = {}
    alphabet.forEach((c, i)=>{
        dict[c] = order[i];
    });
    words = words.map(word=>word.split("").map(c=>dict[c]).join(""));
    let res = true;
    for(let i = 0; i < words.length - 1; ++i){
       res = res && (words[i] < words[i + 1]);
    }
    return res;
};