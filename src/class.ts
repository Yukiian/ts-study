//---------------------------------------------抽象类 
//--- 抽象类一般做为其它派生类的基类使用，它们一般不会直接实例化，不同于接口，抽象类可以包含成员的实现细节
abstract class Animals {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}
///const animal = new Animals() //无法创建抽象类的实例
class Cat extends Animals {
    makeSound() {
        console.log('miao miao')
    }
}

const cat = new Cat()

cat.makeSound() // miao miao
cat.move() // roaming the earch...
//我们不能直接实例化抽象类，通常需要我们创建子类继承基类,然后可以实例化子类。

//---------------------------------------------访问限定符
//传统面向对象语言通常都有访问限定符，TypeScript 中有三类访问限定符，分别是: public、private、protected。
class Car {
    public run() { //在 TypeScript 的类中，成员都默认为 public, 被此限定符修饰的成员是可以被外部（实例）访问。
        console.log('启动...')
    }
    private move() { //当成员被设置为 private 之后, 被此限定符修饰的成员是只可以被类的内部访问。
        console.log('移动...')
    }
    protected close() {//当成员被设置为 protected 之后, 被此限定符修饰的成员是只可以被类的内部以及类的子类访问。
        console.log('关闭...')
    }
}

//--------------------------------------------class可以作为接口


