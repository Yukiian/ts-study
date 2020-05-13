//------------------------------定义函数类型
// const add = (a: number, b: number): number => {
//     return a + b
// }
//ts中函数的定义  (a:number,b:number)=>number  左边是输入类型需要用括号括起来，右边是输出类型
const add: (a: number, b: number) => number = (a: number, b: number) => a + b
//也可用接口定义
interface IAdd {
    (a: number, b: number): number
}
// const add: IAdd = (a: number, b: number) => a + b

//-----------------------------可选参数
const add1 = (a: number, b?: number) => a + (b ? b : 0) //参数b有number与undefined两种可能。
//-----------------------------默认参数
const add2 = (a: number, b = 10) => a + b //即在参数后赋值即可
//-----------------------------剩余参数
const add3 = (a: number, ...rest: number[]) => rest.reduce(((a, b) => a + b), a)


//---------------------------重载
interface IDirection {
    top: number,
    bottom?: number,
    left?: number,
    right?: number
}
function assigned(all: number): IDirection
function assigned(topAndBottom: number, leftAndRight: number): IDirection
function assigned(top: number, right: number, bottom: number, left: number): IDirection

function assigned(a: number, b?: number, c?: number, d?: number): IDirection {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a
    } else if (c === undefined && d === undefined) {
        c = a
        d = b
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d
    }
}

assigned(1)
assigned(1, 2)
// assigned(1, 2, 3) 会报错
assigned(1, 2, 3, 4)
