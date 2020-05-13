"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Upn"] = 0] = "Upn";
    Direction[Direction["Downn"] = 1] = "Downn";
    Direction[Direction["Leftn"] = 2] = "Leftn";
    Direction[Direction["Rightn"] = 3] = "Rightn";
})(Direction || (Direction = {}));
console.log(Direction.Upn === 0);
console.log(Direction.Downn === 1);
console.log(Direction.Leftn === 2);
console.log(Direction.Rightn === 3);
(function (Direction) {
    Direction[Direction["Up"] = 10] = "Up";
    Direction[Direction["Down"] = 11] = "Down";
    Direction[Direction["Left"] = 12] = "Left";
    Direction[Direction["Right"] = 13] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right);
(function (Direction) {
    Direction["Ups"] = "Up";
    Direction["Downs"] = "Down";
    Direction["Lefts"] = "Left";
    Direction["Rights"] = "Right";
})(Direction || (Direction = {}));
console.log(Direction['Rights'], Direction.Up);
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
console.log(Direction[0], Direction[1]);
var atest = Direction.Up;
var btest = 0;
console.log(btest === Direction.Up);
var Directionss;
(function (Directionss) {
    Directionss[Directionss["Upu"] = 0] = "Upu";
    Directionss[Directionss["Downu"] = 1] = "Downu";
    Directionss[Directionss["Leftu"] = 2] = "Leftu";
    Directionss[Directionss["Rightu"] = 3] = "Rightu";
})(Directionss || (Directionss = {}));
var Animal;
(function (Animal) {
    Animal[Animal["Dog"] = 0] = "Dog";
    Animal[Animal["Cat"] = 1] = "Cat";
})(Animal || (Animal = {}));
ctest = Directionss.Upu;
var Month;
(function (Month) {
    Month[Month["January"] = 0] = "January";
    Month[Month["February"] = 1] = "February";
    Month[Month["March"] = 2] = "March";
    Month[Month["April"] = 3] = "April";
    Month[Month["May"] = 4] = "May";
    Month[Month["June"] = 5] = "June";
    Month[Month["July"] = 6] = "July";
    Month[Month["August"] = 7] = "August";
    Month[Month["September"] = 8] = "September";
    Month[Month["October"] = 9] = "October";
    Month[Month["November"] = 10] = "November";
    Month[Month["December"] = 11] = "December";
})(Month || (Month = {}));
(function (Month) {
    function isSummer(month) {
        switch (month) {
            case Month.June:
            case Month.July:
            case Month.August:
                return true;
            default:
                return false;
        }
    }
    Month.isSummer = isSummer;
})(Month || (Month = {}));
console.log(Month.isSummer(Month.January));
//# sourceMappingURL=enum.js.map