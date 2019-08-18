"use strict";
exports.__esModule = true;
function iqTest(numbers) {
    var arr = [];
    var count = 0;
    numbers.split(" ").forEach(function (n) { return arr.push(+n); });
    for (var i = 0; i < arr.length; i++) {
        arr[i] % 2 ? count++ : count;
    }
    for (var i = 0; i < arr.length; i++) {
        if (count < 2 && arr[i] % 2 !== 0) {
            return i;
        }
        else if (count >= 2 && arr[i] % 2 == 0) {
            return i;
        }
    }
}
exports.iqTest = iqTest;
console.log(iqTest("1 3 1 0 5"));
