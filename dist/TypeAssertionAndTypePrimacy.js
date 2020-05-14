"use strict";
var person = {};
person.name = 'tianyuqi';
person.age = 22;
var person1 = 'tianyuqi1';
var IPerson = (function () {
    function IPerson() {
        this.name = 'xiaomuzhu';
        this.age = 20;
    }
    return IPerson;
}());
var IAnimal = (function () {
    function IAnimal() {
        this.name = 'petty';
        this.color = 'pink';
    }
    return IAnimal;
}());
function getSometing(arg) {
    if (arg instanceof IPerson) {
        console.log(arg.color);
        console.log(arg.age);
    }
    if (arg instanceof IAnimal) {
        console.log(arg.age);
        console.log(arg.color);
    }
}
function getSometings(arg) {
    if ('age' in arg) {
        console.log(arg.color);
        console.log(arg.age);
    }
    if ('color' in arg) {
        console.log(arg.age);
        console.log(arg.color);
    }
}
function doStuff(arg) {
    if (arg.kind === 'foo') {
        console.log(arg.foo);
        console.log(arg.bar);
    }
    else {
        console.log(arg.foo);
        console.log(arg.bar);
    }
}
//# sourceMappingURL=TypeAssertionAndTypePrimacy.js.map