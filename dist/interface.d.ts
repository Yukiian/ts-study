interface IUser {
    name: string;
    age?: number;
    readonly isMale: boolean;
    say: ISay;
    phone: IPhone;
}
interface ISay {
    (words: string): string;
}
declare const getUserName: (users: IUser) => string;
declare const users: {
    name: string;
    age: number;
    isMale: boolean;
    say(words: string): string;
    phone: {
        email: string;
    };
};
interface IConfig {
    width?: number;
    [propName: string]: any;
}
declare function CalculateAreas(config: IConfig): {
    area: number;
};
declare let mySquare: {
    area: number;
};
declare let options: any;
interface IPhone {
    [name: string]: string;
}
interface VIPUser extends IUser {
    broadcast: () => void;
}
