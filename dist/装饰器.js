"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function addAge(constructor) {
    constructor.prototype.age = 18;
}
var decoratorPerson = (function () {
    function decoratorPerson() {
        this.name = 'tianyuqi';
    }
    decoratorPerson = __decorate([
        addAge,
        __metadata("design:paramtypes", [])
    ], decoratorPerson);
    return decoratorPerson;
}());
var decoratorperson = new decoratorPerson();
console.log(person.age);
function method(target, propertyKey, descriptor) {
    console.log(target);
    console.log("prop " + propertyKey);
    console.log("desc " + JSON.stringify(descriptor) + "\n\n");
    descriptor.writable = false;
}
;
var methodsPerson = (function () {
    function methodsPerson() {
        this.name = 'xiaomuzhu';
    }
    methodsPerson.prototype.say = function () {
        return 'instance method';
    };
    methodsPerson.run = function () {
        return 'static method';
    };
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], methodsPerson.prototype, "say", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], methodsPerson, "run", null);
    return methodsPerson;
}());
var tyq = new methodsPerson();
tyq.say = function () {
    return 'edit';
};
function logParameter(target, propertyKey, index) {
    console.log(target, propertyKey, index);
}
var logPerson = (function () {
    function logPerson() {
    }
    logPerson.prototype.greet = function (message, name) {
        return message + " " + name;
    };
    __decorate([
        __param(0, logParameter), __param(1, logParameter),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", String)
    ], logPerson.prototype, "greet", null);
    return logPerson;
}());
var plog = new logPerson();
plog.greet('hello', 'tianyuqi');
var logsPerson = (function () {
    function logsPerson(name) {
        this.name = name;
    }
    logsPerson.prototype.greet = function (message) {
        return this.name + " say: " + message;
    };
    __decorate([
        log,
        __metadata("design:type", String)
    ], logsPerson.prototype, "name", void 0);
    __decorate([
        log,
        __param(0, logParameter),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", String)
    ], logsPerson.prototype, "greet", null);
    logsPerson = __decorate([
        log,
        __metadata("design:paramtypes", [String])
    ], logsPerson);
    return logsPerson;
}());
function logClass(target) {
    console.log(target);
}
function logProperty(target, propertyKey) {
    console.log(propertyKey);
}
function logMethod(target, propertyKey, descriptor) {
    console.log(propertyKey);
}
function log() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    switch (args.length) {
        case 1:
            return logClass.apply(this, args);
        case 2:
            return logProperty.apply(this, args);
        case 3:
            if (typeof args[2] === "number") {
                return logParameter.apply(this, args);
            }
            return logMethod.apply(this, args);
        default:
            throw new Error("Decorators are not valid here!");
    }
}
//# sourceMappingURL=装饰器.js.map