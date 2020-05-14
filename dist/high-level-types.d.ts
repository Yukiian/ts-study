interface IAnyObject {
    [prop: string]: any;
}
declare function mixin<T extends IAnyObject, U extends IAnyObject>(first: T, second: U): T & U;
declare const mixinX: {
    a: string;
} & {
    b: number;
};
declare const mixinA: string;
declare const mixinB: number;
declare function formatCommandline(command: string[] | string): void;
declare type some = boolean | string;
declare const someb: some;
declare const somea: some;
declare const somec: some;
declare type Container<T> = {
    value: T;
};
declare type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
};
