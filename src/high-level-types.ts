//交叉类型
interface IAnyObject {
    [prop: string]: any
}
function mixin<T extends IAnyObject, U extends IAnyObject>(first: T, second: U): T & U {
    const result = <T & U>{}; //类型断言
    for (let id in first) {
        (<T>result)[id] = first[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<U>result)[id] = second[id];
        }
    }

    return result;
}
const mixinX = mixin({ a: 'hello' }, { b: 42 });

// 现在 x 拥有了 a 属性与 b 属性
const mixinA = mixinX.a;
const mixinB = mixinX.b;

//联合类型
function formatCommandline(command: string[] | string) {
    let line = '';
    if (typeof command === 'string') {
        line = command.trim();
    } else {
        line = command.join(' ').trim();
    }
}
//联合类型表示一个值可以是几种类型之一，我们用竖线（|）分隔每个类型，所以number | string | boolean表示一个值可以是number、string、或boolean。

//类型别名
type some = boolean | string

const someb: some = true
const somea: some = '123'
const somec: some = 124 //error
//类型别名也可以是泛型
type Container<T> = { value: T };
//也可以使用类型别名在属性里使用自己
type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}


//interface 和类型别名type的区别
//interface只能用于定义对象类型，而type的声明方式除了对象以外还可以定义交叉、联合、原始类型等
/**
 * interface 方式可以实现接口的 extends 和 implements
 * interface 可以实现接口合并声明
 **/