import { Strings } from "@packages/dep2";
var Utils = (function () {
    function Utils() {
    }
    Utils.add = function (num1, num2) {
        return num1 + num2;
    };
    Utils.multiply = function (num1, num2) {
        return num1 * num2;
    };
    Utils.divide = function (num1, num2) {
        return num1 / num2;
    };
    Utils.subtract = function (num1, num2) {
        return num1 - num2;
    };
    Utils.square = function (num1) {
        var n = num1;
        var f = n;
        return num1 * num1;
    };
    Utils.someString = function (a, b) {
        return Strings.concatWithSpace(a, b);
    };
    return Utils;
}());
export { Utils };
//# sourceMappingURL=utils.js.map