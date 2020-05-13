//接口的使用 
//用来定义对象的形状
interface IUser {
    name: string,
    age?: number, //?可选属性
    readonly isMale: boolean, //readonly 可以把一个属性变成只读属性，后面就无法对它进行修改了
    //如果user中含有一个函数怎么办
    //一种是直接在接口内部描述函数
    // say: (words: string) => string
    say: ISay,
    phone: IPhone
}
//另一种用接口直接描述函数类型
interface ISay {
    (words: string): string
}
const getUserName = (users: IUser) => users.name

const users = {
    name: 'tianyuqi',
    age: 22,
    isMale: true,
    say(words: string) {
        return 'hello' + words
    },
    phone: {
        email: '564417296@qq.com'
    }
}
getUserName(users)

//属性检查
//假如我们有一个Config接口如下
interface IConfig {
    width?: number
    [propName: string]: any
}
function CalculateAreas(config: IConfig): { area: number } {
    let square = 100;
    if (config.width) {
        square = config.width * config.width;
    }
    return { area: square }
}

//let mySquare = CalculateAreas({ widdth: 5 }); //注意这里是widdth，并不是width
//对象字面量当被赋值给变量或作为参数传递的时候，会被特殊对待而且经过“额外属性检查”。 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
//solution1 类型断言
let mySquare = CalculateAreas({ widdth: 5 } as IConfig);
//solution2 添加字符串索引签名 ----这样Config可以有任意数量的属性，并且只要不是width，那么就无所谓他们的类型是什么了。
//solution3 第三种将字面量赋值给另外一个变量：
let options: any = { widdth: 5 };
// let mySquare = CalculateAreas(options);//本质上是转化为 any 类型，除非有万不得已的情况，不建议采用上述方法。

//可索引类型 --就是里面参数可以有多个并不限制个数
interface IPhone {
    [name: string]: string
}

//继承接口 ---甚至可以继承多个接口
interface VIPUser extends IUser {
    broadcast: () => void
}

