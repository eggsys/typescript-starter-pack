import { Father } from "./father";
export class Son {
    private fatherInstance: Father;
    constructor(name: string, age: number) {
        this.fatherInstance = new Father(name, age);
        
    }
}