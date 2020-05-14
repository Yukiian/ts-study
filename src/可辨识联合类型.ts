//字面量类型
//字面量主要分为真值字面量类型（boolean literal types）,数字字面量类型（numeric literal types）,枚举字面量类型（enum literal types）,大整数字面量类型（bigInt literal types）和字符串字面量类型（string literal types）。
const ab: 0b10 = 2 // ok
const ao: 0o114 = 0b1001100 // ok
const ax: 0x514 = 0x514 // ok
const d: false = false // ok
//字面量类型的要和实际的值的字面量一一对应,如果不一致就会报错
//你可能会问这种只有单个类型的字面量类型有什么用处呢?
//当字面量类型与联合类型结合的时候,用处就显现出来了,它可以模拟一个类似于枚举的效果:
type Directiontype = 'North' | 'East' | 'South' | 'West';
function move(distance: number, direction: Direction) {
    // ...
}

//类型字面量
//类型字面量(Type Literal)不同于字面量类型（Literal Type),它跟 JavaScript 中的对象字面量的语法很相似:
type Foos = {
    baz: [
        number,
        'xiaomuzhu'
    ];
    toString(): string;
    readonly [Symbol.iterator]: 'github';
    0x1: 'foo';
    "bar": 12n;
};
//你会发现这个结构跟 interface 也有点相似,我们在类型别名那一节讲过,在一定程度上类型字面量可以代替接口.

//可辨识联合类型
interface Info {
    username: string
}
// interface UserAction {
//     id?: number
//     action: 'create' | 'delete'
//     info: Info
// }
const action: UserAction = {
    action: 'create',
    id: 111,
    info: {
        username: 'xiaomuzhu'
    }
} //增加不需要id但是根据接口产生的情况，这个代码是合法的
//当我们明确不需要id字段时，我们可以用类型字面量的方法了
type UserAction = {
    id: number
    action: 'delete' //字面量类型
    info: Info
} | {
    action: 'create' //字面量类型
    info: Info
}

const UserReducer = (userAction: UserAction) => {
    switch (userAction.action) {
        case 'delete':
            console.log(userAction.id)
            break;
        default:
            break
    }
}