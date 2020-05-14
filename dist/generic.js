"use strict";
function returnItem(param) {
    return param;
}
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([7, 'seven']);
function getArrayLength(arg) {
    console.log(arg.length);
    return arg;
}
var returnItem1 = function (param) { return param; };
var Stack = (function () {
    function Stack() {
        this.arr = [];
    }
    Stack.prototype.push = function (item) {
        this.arr.push(item);
    };
    Stack.prototype.pop = function () {
        this.arr.pop();
    };
    return Stack;
}());
var Stack1 = (function () {
    function Stack1() {
        this.arr = [];
    }
    Stack1.prototype.push = function (item) {
        this.arr.push(item);
    };
    Stack1.prototype.pop = function () {
        this.arr.pop();
    };
    return Stack1;
}());
var stack1 = new Stack1();
function getValue(obj, key) {
    return obj[key];
}
function factory(Type) {
    return new Type();
}
//# sourceMappingURL=generic.js.map