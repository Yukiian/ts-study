"use strict";
var Person = (function () {
    function Person(weight, name, born) {
        this.weight = weight;
        this.name = name;
        this.born = born;
    }
    return Person;
}());
var dogs;
dogs = new Person(120, 'cxk', '1996-12-12');
var Status;
(function (Status) {
    Status[Status["Ready"] = 0] = "Ready";
    Status[Status["waiting"] = 1] = "waiting";
})(Status || (Status = {}));
var statuss = Status.Ready;
var num = 0;
statuss = num;
num = statuss;
function getPersonName(p) {
}
var personName = { name: '123', age: 22, weight: 23 };
getPersonName(personName);
//# sourceMappingURL=类型兼容性.js.map