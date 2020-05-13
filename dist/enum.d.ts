declare enum Direction {
    Upn = 0,
    Downn = 1,
    Leftn = 2,
    Rightn = 3
}
declare enum Direction {
    Up = 10,
    Down = 11,
    Left = 12,
    Right = 13
}
declare enum Direction {
    Ups = "Up",
    Downs = "Down",
    Lefts = "Left",
    Rights = "Right"
}
declare enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES"
}
declare const enum Directions {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}
declare const atest = Direction.Up;
declare const btest = 0;
declare enum Directionss {
    Upu = 0,
    Downu = 1,
    Leftu = 2,
    Rightu = 3
}
declare let ctest: Directionss;
declare enum Animal {
    Dog = 0,
    Cat = 1
}
declare enum Month {
    January = 0,
    February = 1,
    March = 2,
    April = 3,
    May = 4,
    June = 5,
    July = 6,
    August = 7,
    September = 8,
    October = 9,
    November = 10,
    December = 11
}
declare namespace Month {
    function isSummer(month: Month): boolean;
}
