/** 
 *  
 * 枚举类型是很多语言都拥有的类型,它用于声明一组命名的常数,当一个变量有几种可能的取值时,可以将它定义为枚举类型。
 * 
 * **/

//数字枚举
//当我们声明一个枚举类型是,虽然没有给它们赋值,但是它们的值其实是默认的数字类型,而且默认从0开始依次累加:
enum Direction { Upn, Downn, Leftn, Rightn }
console.log(Direction.Upn === 0); // true
console.log(Direction.Downn === 1); // true
console.log(Direction.Leftn === 2); // true
console.log(Direction.Rightn === 3); // true

enum Direction { Up = 10, Down, Left, Right } //如果我们给第一个值赋值后，后面也根据第一个值累加
console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right); // 10 11 12 13

//字符串枚举
enum Direction {
    Ups = 'Up',
    Downs = 'Down',
    Lefts = 'Left',
    Rights = 'Right'
}
console.log(Direction['Rights'], Direction.Up); // Right Up

//异构枚举
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}
//通常情况下我们很少会这样使用枚举，但是从技术的角度来说，它是可行的。

//反向映射
console.log(Direction[0], Direction[1]) //up , Downn
// var Direction;
// (function (Direction) {
//     Direction[Direction["Up"] = 10] = "Up";
//     Direction[Direction["Down"] = 11] = "Down";
//     Direction[Direction["Left"] = 12] = "Left";
//     Direction[Direction["Right"] = 13] = "Right";
// })(Direction || (Direction = {}));

//常量枚举
const enum Directions {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
const atest = Direction.Up;
//因为下面的atest已经使用过枚举类型，之后就没有用了，编译后也没必要存在了，用于性能提升

//联合枚举与枚举成员的类型
//我们假设枚举的所有成员都是字面量类型的值，那么枚举的每个成员和枚举值本身都可以作为类型来使用
const btest = 0
console.log(btest === Direction.Up) // true

//联合枚举类型
enum Directionss {
    Upu,
    Downu,
    Leftu,
    Rightu
}
declare let ctest: Directionss
enum Animal {
    Dog,
    Cat
}
ctest = Directionss.Upu // ok
//ctest = Animal.Dog // 不能将类型“Animal.Dog”分配给类型“Direction”
//可以看出我们把ctest声明了一个联合类型Direction.Up | Direction.Down | Direction.Left | Direction.Right，只有这四个类型其中的成员才符合要求。

//枚举合并   我们可以分开声明枚举,他们会自动合并,因此分开声明时没有影响的

//为枚举添加静态方法
//借助 namespace 命名空间，我们甚至可以给枚举添加静态方法。
enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
}
namespace Month {
    export function isSummer(month: Month) {
        switch (month) {
            case Month.June:
            case Month.July:
            case Month.August:
                return true;
            default:
                return false
        }
    }
}

console.log(Month.isSummer(Month.January)) // false


