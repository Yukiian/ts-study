declare const add: (a: number, b: number) => number;
interface IAdd {
    (a: number, b: number): number;
}
declare const add1: (a: number, b?: number | undefined) => number;
declare const add2: (a: number, b?: number) => number;
declare const add3: (a: number, ...rest: number[]) => number;
interface IDirection {
    top: number;
    bottom?: number;
    left?: number;
    right?: number;
}
declare function assigned(all: number): IDirection;
declare function assigned(topAndBottom: number, leftAndRight: number): IDirection;
declare function assigned(top: number, right: number, bottom: number, left: number): IDirection;
