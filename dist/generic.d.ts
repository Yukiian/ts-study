declare function returnItem<T>(param: T): T;
declare function swap<T, U>(tuple: [T, U]): [U, T];
declare function getArrayLength<T>(arg: Array<T>): T[];
interface IReturnItem<T> {
    (param: T): T;
}
declare const returnItem1: IReturnItem<number>;
declare class Stack<T> {
    private arr;
    push(item: T): void;
    pop(): void;
}
declare type Params = string | number;
declare class Stack1<T extends Params> {
    private arr;
    push(item: T): void;
    pop(): void;
}
declare const stack1: Stack1<string>;
declare function getValue<T extends object, U extends keyof T>(obj: T, key: U): T[U];
interface IFirstInterface {
    doSomething(): number;
}
interface ISecondInterface {
    doSomethingElse(): string;
}
interface ChildInterface extends IFirstInterface, ISecondInterface {
}
declare function factory<T>(Type: {
    new (): T;
}): T;
