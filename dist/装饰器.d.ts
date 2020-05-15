declare function addAge(constructor: Function): void;
declare class decoratorPerson {
    name: string;
    age: number;
    constructor();
}
declare let decoratorperson: decoratorPerson;
declare function method(target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
declare class methodsPerson {
    name: string;
    constructor();
    say(): string;
    static run(): string;
}
declare const tyq: methodsPerson;
declare function logParameter(target: Object, propertyKey: string, index: number): void;
declare class logPerson {
    greet(message: string, name: string): string;
}
declare const plog: logPerson;
declare class logsPerson {
    name: string;
    constructor(name: string);
    greet(message: string): string;
}
declare function logClass(target: typeof logsPerson): void;
declare function logProperty(target: any, propertyKey: string): void;
declare function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
declare function log(...args: any[]): any;
