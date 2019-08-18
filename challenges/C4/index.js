"use strict";
exports.__esModule = true;
function findUniq(arr) {
    var filter = 0;
    arr[0] == arr[1] ? filter = arr[0] : filter = arr[2];
    return arr.filter(function (f) { return filter !== f; })[0];
}
exports.findUniq = findUniq;
console.log(findUniq([1, 1, 0, 1, 1, 1, 1]));
