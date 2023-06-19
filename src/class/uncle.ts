import { Father } from "./father";

export class Uncle extends Father {
    constructor(name: string, age: number) {
        super(name, age);
    }

    public uncleShowName(): void{
        console.info("uncleShowName : ", this.name);
    }

    public uncleShowAge(): void{
        console.info("uncleShowAge : ", this.age);
    }
}