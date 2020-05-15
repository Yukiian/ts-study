//类装饰器  ---当装饰器作为修饰类的时候，会把构造器传递进去
function addAge(constructor: Function) {
    constructor.prototype.age = 18;
}

@addAge
class decoratorPerson {
    name: string;
    age!: number;
    constructor() {
        this.name = 'tianyuqi'
    }
}

let decoratorperson = new decoratorPerson()
console.log(person.age); // 18
//所以这段代码实际上基本等同于：
// Person = addAge(function Person() { ... });

// 属性/方法装饰器
function method(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log("prop " + propertyKey);
    console.log("desc " + JSON.stringify(descriptor) + "\n\n");
    descriptor.writable = false;
};
class methodsPerson {
    name: string;
    constructor() {
        this.name = 'xiaomuzhu';
    }

    @method
    say() {
        return 'instance method';
    }
    @method
    static run() {
        return 'static method';
    }
}

const tyq = new methodsPerson();
// 修改实例方法say
tyq.say = function () {
    return 'edit'
}
//在属性/方法的装饰器定义过程中,与 class 的装饰器不同,我们的 method 函数中的参数变为了三个 target、propertyKey、descriptor.


//------------------高级装饰器
/* 
* 参数装饰器需要三个参数 target、propertyKey、index：
* target —— 当前对象的原型，也就是说，假设 Person 是当前对象，那么当前对象 target 的原型就是 Person.prototype
* propertyKey —— 参数的名称，上例中指的就是 greet
* index —— 参数数组中的位置，比如上例中参数 name 的位置是 1, message 的位置为 0
*/
function logParameter(target: Object, propertyKey: string, index: number) {
    console.log(target, propertyKey, index);
}
class logPerson {
    greet(@logParameter message: string, @logParameter name: string): string {
        return `${message} ${name}`;
    }
}
const plog = new logPerson()
plog.greet('hello', 'tianyuqi')
// Person { greet: [Function] } greet 1
// Person { greet: [Function] } greet 0


//---------------装饰器工厂
@log
class logsPerson {

    @log
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    @log
    public greet(@logParameter message: string): string {
        return `${this.name} say: ${message}`;
    }
}
// 打印构造函数
function logClass(target: typeof logsPerson) {
    console.log(target)
}

// 打印属性名
function logProperty(target: any, propertyKey: string) {
    console.log(propertyKey);
}

// 打印方法名
function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(propertyKey);
}

function log(...args: any[]) {
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

//-----------装饰器顺序
/*在 TypeScript 里，当多个装饰器应用在一个声明上时会进行如下步骤的操作：
    由上至下依次对装饰器表达式求值。
    求值的结果会被当作函数，由下至上依次调用。*/

    //类中不同声明上的装饰器将按以下规定的顺序应用：
    //参数装饰器，然后依次是方法装饰器，访问符装饰器，或属性装饰器应用到每个实例成员。
    //参数装饰器，然后依次是方法装饰器，访问符装饰器，或属性装饰器应用到每个静态成员。
    //参数装饰器应用到构造函数。
    //类装饰器应用到类。
