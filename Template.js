function isNumber(s) {
    var integer = "([+]|-)?[0-9]+";
    var decimal = "([+]|-)?(([0-9]+\\.[0-9]*)|(\\.[0-9]+))";
    var valid = RegExp("^(((" + integer + ")|(" + decimal + "))((e|E)" + integer + ")?)$");
    return valid.test(s);
}
;
["2", "0089", "-0.1", "+3.14", "4.",
    "-.9", "2e10", "-90E3", "3e+7", "+6e-1",
    "53.5e93", "-123.456e789"].forEach(function (x) { return console.log("True: " + isNumber(x)); });
["abc", "1a", "1e", "e3", "99e2.5",
    "--6", "-+3", "95a54e53"].forEach(function (x) { return console.log("False: " + isNumber(x)); });
