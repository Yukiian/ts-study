declare const ab: 0b10;
declare const ao: 0o114;
declare const ax: 0x514;
declare const d: false;
declare type Directiontype = 'North' | 'East' | 'South' | 'West';
declare function move(distance: number, direction: Direction): void;
declare type Foos = {
    baz: [number, 'xiaomuzhu'];
    toString(): string;
    readonly [Symbol.iterator]: 'github';
    0x1: 'foo';
    "bar": 12n;
};
interface Info {
    username: string;
}
declare const action: UserAction;
declare type UserAction = {
    id: number;
    action: 'delete';
    info: Info;
} | {
    action: 'create';
    info: Info;
};
declare const UserReducer: (userAction: UserAction) => void;
