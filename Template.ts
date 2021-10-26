function isNumber(s: string): boolean {
    let integer: string = "([+]|-)?[0-9]+";
    let decimal: string = "([+]|-)?(([0-9]+\\.[0-9]*)|(\\.[0-9]+))";
    let valid: RegExp 
    = RegExp(`^(((${integer})|(${decimal}))((e|E)${integer})?)$`);
    return valid.test(s);
};

["2", "0089", "-0.1", "+3.14", "4.",
 "-.9", "2e10", "-90E3", "3e+7", "+6e-1",
  "53.5e93", "-123.456e789"].forEach(x=>console.log("True: " + isNumber(x)));

  ["abc", "1a", "1e", "e3", "99e2.5"
  , "--6", "-+3", "95a54e53"].forEach(x=>console.log("False: " + isNumber(x)))