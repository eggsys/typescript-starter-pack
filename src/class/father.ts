export class Father {
  public name: string;
  public age: number;
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
