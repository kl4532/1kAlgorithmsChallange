"use strict";
exports.__esModule = true;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.highAndLow = function (numbers) {
        var num = numbers.split(" ");
        var arr = [];
        num.forEach(function (n) { return arr.push(+n); });
        arr.sort(function (a, b) { return a - b; });
        return arr[arr.length - 1] + " " + arr[0];
    };
    return Kata;
}());
exports.Kata = Kata;
console.log(Kata.highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
