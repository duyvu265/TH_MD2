import {NY} from "./QLY_NY";

export class Ny_Manager {
     list: Array<NY> = []
    private _count: number = 0;

    constructor() {
    }


    get arr(): Array<NY> {
        return this.list;
    }

    set arr(value: Array<NY>) {
        this.list = value;
    }

    get count(): number {
        return this._count++;
    }

    set count(value: number) {
        this._count = value;
    }

    addNy(data: NY) {
        this.list.push(data);
    }

    showNy() {
        return this.list
    }

    editNy(index: number, name: string,zodiac:string, code_Ny:number, home_town:string,  year_of_birth:number, hobby:string) {
        // let index = this.findNy(name);
        this.list[index].name = name;
        this.list[index].zodiac=zodiac;
        this.list[index].hobby = hobby;
        this.list[index].code_Ny = code_Ny;
        this.list[index].year_of_birth = year_of_birth;
        this.list[index].home_town = home_town;

    }

    findNy(name: string):number {
        let ind = -1;
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].name == name) {
                ind = i;
            }
        }
        return ind

    }

    remove(name: string): void {
        let deleteIndext = this.findNy(name);
        if (deleteIndext != -1) {
            this.list.splice(deleteIndext, 1);
        }else console.log("khong tim thay")


    }

    findByCode(code: number): any {
        for (let i = 0; i < this.list.length; i++) {
            let ind = -1;
            if (this.list[i].code_Ny == code) {
                ind = i;
            }
            return ind;
        }

    }search(name: string): void {
        let arr: NY[] = this.list;
        let result: NY[] = arr.filter(element => element.name.includes(name));
        if (result.length === 0) {
            console.log('Eror - Khong tim thay bai hat nao co cung ten');
        } else {
            console.table(result);
        }
    }
}