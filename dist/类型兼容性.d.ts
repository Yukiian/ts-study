declare class Person {
    weight: number;
    name: string;
    born: string;
    constructor(weight: number, name: string, born: string);
}
interface Dog {
    name: string;
    weight: number;
}
declare let dogs: Dog;
declare enum Status {
    Ready = 0,
    waiting = 1
}
declare let statuss: Status;
declare let num: number;
interface PersonTest {
    name: string;
    age: number;
    weight: number;
}
interface AnimalTest {
    name: string;
    age: number;
    weight: number;
}
declare function getPersonName(p: PersonTest): void;
declare let personName: AnimalTest;
