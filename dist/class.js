"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animals = (function () {
    function Animals() {
    }
    Animals.prototype.move = function () {
        console.log('roaming the earch...');
    };
    return Animals;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log('miao miao');
    };
    return Cat;
}(Animals));
var cat = new Cat();
cat.makeSound();
cat.move();
var Car = (function () {
    function Car() {
    }
    Car.prototype.run = function () {
        console.log('启动...');
    };
    Car.prototype.move = function () {
        console.log('移动...');
    };
    Car.prototype.close = function () {
        console.log('关闭...');
    };
    return Car;
}());
//# sourceMappingURL=class.js.map