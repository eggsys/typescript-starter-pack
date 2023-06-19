export class Dog {
    private name: string;
    private buildArr: string[];
    constructor(name: string) {
       console.log("Start", name); 
       this.name = name;
       this.buildArr = [];
    }

    /**
     * getDogName
     */
    public getDogName(): void {
        console.log(this.name);
    }

    public getDogName2(): string{
        return this.name;
    }

    public changeDogName(newName: string): void{
       this.name = newName;
    }

    public async process(): Promise<void>{
       
        await this.build1("A");
        console.log(this.buildArr);
        await this.build2("B");
        console.log(this.buildArr);
        await this.build3("C");
        console.log(this.buildArr);

       const a = Promise.all([this.getAge, this.getAge2]);
       a.then(response=> console.log(response))
    }

    public async getAge(): Promise<number>{
        return 10;
    }

    public async getAge2(): Promise<number>{
        return 20;
    }


    public async build1(floor: string): Promise<void>{
        this.buildArr.push(floor)
    }

    public async build2(floor: string): Promise<void>{
        this.buildArr.push(floor)
    }

    public async build3(floor: string): Promise<void>{
        this.buildArr.push(floor)
    }
    

    
}