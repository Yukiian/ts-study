declare abstract class Animals {
    abstract makeSound(): void;
    move(): void;
}
declare class Cat extends Animals {
    makeSound(): void;
}
declare const cat: Cat;
declare class Car {
    run(): void;
    private move;
    protected close(): void;
}
