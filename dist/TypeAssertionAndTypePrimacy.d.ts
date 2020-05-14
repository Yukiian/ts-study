interface IPerson {
    name: string;
    age: number;
}
declare const person: IPerson;
declare const person1: IPerson;
declare class IPerson {
    name: string;
    age: number;
}
declare class IAnimal {
    name: string;
    color: string;
}
declare function getSometing(arg: IPerson | IAnimal): void;
declare function getSometings(arg: IPerson | IAnimal): void;
declare type Foo = {
    kind: 'foo';
    foo: number;
};
declare type Bar = {
    kind: 'bar';
    bar: number;
};
declare function doStuff(arg: Foo | Bar): void;
