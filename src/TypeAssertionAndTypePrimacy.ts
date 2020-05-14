//类型断言与类型守卫
//-------------------类型断言
interface IPerson {
    name: string,
    age: number
}
const person = {} as IPerson
person.name = 'tianyuqi'
person.age = 22
//但是类型断言不要滥用,在万不得已的情况下使用要谨慎,因为你强制把某类型断言会造成 TypeScript 丧失代码提示的能力。

//双重断言
const person1 = 'tianyuqi1' as any as IPerson
//先把类型断言为 any 再接着断言为你想断言的类型就能实现双重断言，当然上面的例子肯定说不通的，双重断言我们也更不建议滥用，但是在一些少见的场景下也有用武之地，当你遇到事记得有双重断言这个操作即可。

//------------------类型守卫
//类型守卫说白了就是缩小类型的范围，我们看几个例子就容易理解了。
//instanceof
class IPerson {
    name = 'xiaomuzhu';
    age = 20;
}

class IAnimal {
    name = 'petty';
    color = 'pink';
}

function getSometing(arg: IPerson | IAnimal) {
    // 类型细化为 Person
    if (arg instanceof IPerson) {
        console.log(arg.color); // Error，因为arg被细化为Person，而Person上不存在 color属性
        console.log(arg.age); // ok
    }
    // 类型细化为 Person
    if (arg instanceof IAnimal) {
        console.log(arg.age); // Error，因为arg被细化为Animal，而Animal上不存在 age 属性
        console.log(arg.color); // ok
    }
}
//in 跟上面的例子类似，x in y 表示 x 属性在 y 中存在。
function getSometings(arg: IPerson | IAnimal) {
    if ('age' in arg) {
        console.log(arg.color); // Error
        console.log(arg.age); // ok
    }
    if ('color' in arg) {
        console.log(arg.age); // Error
        console.log(arg.color); // ok
    }
}
//字面量类型守卫
type Foo = {
    kind: 'foo'; // 字面量类型
    foo: number;
}
type Bar = {
    kind: 'bar'; // 字面量类型
    bar: number;
};
function doStuff(arg: Foo | Bar) {
    if (arg.kind === 'foo') {
        console.log(arg.foo); // ok
        console.log(arg.bar); // Error
    } else {
        console.log(arg.foo); // Error
        console.log(arg.bar); // ok
    }
}