export class Mother {
    protected name: string;
    protected age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    public showName(): void {
      console.info("showName : ", this.name);
    }
  
    protected showAge(): void{
      console.info("showAge: ", this.age);
    }
  }
  