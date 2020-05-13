
/***************************start***************************/
function greeter(person: string): string {
    return 'hello' + person
}
const user = 'jane User'

//typescript 原始数据类型
//boolean number string void undefined null symbol bigint

const isLoading: boolean = false
const decLiteral: number = 6
const book: string = 'typescript'
function warnUser(): void {
    alert("this is my warinig message")
}
const test: void = undefined //null和undefined可以赋值给void
let a: undefined = undefined
let b: null = null

const sym1 = Symbol('key1')
const sym2 = Symbol('key2')
Symbol('key1') === Symbol('key1') // false

//BigInt  
const max = BigInt(Number.MAX_SAFE_INTEGER);
// const max1 = max + 1n
// const max2 = max + 2n  //如果类型是bigint 则需要在数字后面加n

/***************************end***************************/
