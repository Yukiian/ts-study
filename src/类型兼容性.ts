//类型兼容性用于确定一个类型是否能赋值给其他类型.
//结构类型
class Person {
    constructor(public weight: number, public name: string, public born: string) {

    }
}
interface Dog {
    name: string
    weight: number
}

let dogs: Dog
dogs = new Person(120, 'cxk', '1996-12-12') // OK
//此时dog兼容了person 因为 dog里有的属性person里都有还多了其他属性

//函数的类型兼容性
// let funx = (x: number) => 0
// let funy = (a: number, b: string) => 0
// funy = funx

// let foo = (x: number, y: number) => { };
// let bar = (x?: number, y?: number) => { };
// let bas = (...args: number[]) => { };

// foo = bar = bas;
// bas = bar = foo; //如果你在 tsconfig.json 默认配置下上面的兼容性都是没问题的，但是在我们严格检测的环境下还是会报错的

//枚举的类型兼容性
enum Status {
    Ready,
    waiting
}
let statuss = Status.Ready
let num = 0;
statuss = num;
num = statuss;

//类的类型兼容性
//仅仅只有实例成员和方法会相比较，构造函数和静态成员不会被检查:
//私有的和受保护的成员必须来自于相同的类


//泛型类型的兼容性
//泛型本身就是不确定的类型,它的表现根据是否被成员使用而不同.
// interface Persona<T> {
//     name:T //这样就有问题，成员使用了
// }
// let testx: Persona<string>
// let testz: Persona<number>
// testx = testz
// testz = testx
//没有被成员使用泛型，所以这里是没问题的】


interface PersonTest {
    name: string;
    age: number;
    weight: number;
    // [prop: string]: string
}

interface AnimalTest {
    name: string;
    age: number;
    weight: number;
}

function getPersonName(p: PersonTest) {
}
let personName: AnimalTest = { name: '123', age: 22, weight: 23 }
getPersonName(personName)
//形状一样如何让他们不兼容，可以添加索引签名让他们不相互兼容