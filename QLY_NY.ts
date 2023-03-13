

 export class NY {
    private _code_Ny:number
    private _name:string;
    private _zodiac:string;
    private _home_town:string;
    private _year_of_birth:number;
    private _hobby:string;

    constructor(code_Ny: number, name: string, zodiac: string, home_town: string, year_of_birth: number, hobby: string) {
        this._code_Ny = code_Ny;
        this._name = name;
        this._zodiac = zodiac;
        this._home_town = home_town;
        this._year_of_birth = year_of_birth;
        this._hobby = hobby;
    }

    get code_Ny(): number {
        return this._code_Ny;
    }

    set code_Ny(value: number) {
        this._code_Ny = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get zodiac(): string {
        return this._zodiac;
    }

    set zodiac(value: string) {
        this._zodiac = value;
    }

    get home_town(): string {
        return this._home_town;
    }

    set home_town(value: string) {
        this._home_town = value;
    }

    get year_of_birth(): number {
        return this._year_of_birth;
    }

    set year_of_birth(value: number) {
        this._year_of_birth = value;
    }

    get hobby(): string {
        return this._hobby;
    }

    set hobby(value: string) {
        this._hobby = value;
    }
}

