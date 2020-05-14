function returnItem<T>(param: T): T {
    return param
}

//多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

swap([7, 'seven']);

//泛型变量
function getArrayLength<T>(arg: Array<T>) {
    console.log(arg.length) // 类型“T”上不存在属性“length”
    return arg
}

//泛型接口
interface IReturnItem<T> {
    (param: T): T
}

const returnItem1: IReturnItem<number> = param => param

//泛型类
class Stack<T>{
    private arr: T[] = []
    public push(item: T) {
        this.arr.push(item)
    }
    public pop() {
        this.arr.pop()
    }
}

//泛型约束 <T extends xx>
type Params = string | number
class Stack1<T extends Params>{
    private arr: T[] = []
    public push(item: T) {
        this.arr.push(item)
    }
    public pop() {
        this.arr.pop()
    }
}
const stack1 = new Stack1<string>()

//泛型函数和索引类型
//索引类型 keyof 把传入的对象的属性类型取出生成一个联合类型
function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}

//使用多重类型进行泛型约束
interface IFirstInterface {
    doSomething(): number
}
interface ISecondInterface {
    doSomethingElse(): string
}
interface ChildInterface extends IFirstInterface, ISecondInterface {

} //solution1 超接口解决
//solution2 交叉类型
//注意，本示例是在非 「--strictPropertyInitialization」或者「--strict」下测试的
// class Demo<T extends IFirstInterface & ISecondInterface> {
//     private genericProperty: T

//     useT() {
//         this.genericProperty.doSomething()
//         this.genericProperty.doSomethingElse()
//     }

// }

//泛型与 new
//参数 type 的类型 { new(): T } 就表示此泛型 T 是可被构造的，在被实例化后的类型是泛型 T。
function factory<T>(Type: { new(): T }): T {
    return new Type()
}