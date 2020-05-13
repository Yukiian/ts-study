

/***************************start***************************/
//typescript 其他常见类型
/***any***/
let notSure: any = 4
notSure = "maybe a string instead"

/***unknown***/
//unknown比any类型更加严格，在对unknown类型的值执行大多数操作之前，需要进行某种形式的检查，而any不需要
let value: unknown; // value.foo.bar;  // ERROR
//当unkonwn类型被确定是某个类型之前，它不能被进行任何操作比如实例化、getter、函数执行等
//那么什么情况下可以执行unknown呢？那就是缩小其类型范围「类型保护」

/***never***/
//never类型表示那些永远不存在的值的类型，never类型是任何类型的子类型，也可以赋值给任何类型
function error(message: string): never {
    throw new Error(message)
} //抛出异常的函数永远不会有返回值
const empty: never[] = [] //空数组而且永远为空

/***数组***/
//有两种定义方式
const list: Array<number> = [1, 2, 3] //使用泛型
const list1: number[] = [1, 2, 3] //使用更广泛在元素类型后面加[]

/***元祖***/
//元祖表示一个已知元素数量和类型的数组，各元素类型不必相同
let x: [string, number] = ['1', 2]
//元祖十分严格，多一个少一个都不行，顺序不一样也会报错

/***Object***/
//object 表示非原始类型，也就是除 number，string，boolean，symbol，null 或 undefined 之外的类型。
// 这是下一节会提到的枚举类型
enum Direction {
    Center = 1
}
let val: object
val = Direction
val = [1]
val = [1, 'hello']
val = {}
//我们看到,普通对象、枚举、数组、元组通通都是 object 类型。

/***************************end***************************/