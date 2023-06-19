export class Validate1 {
  constructor() {}

  public process(): void {
    const customerFollowerResult = undefined;

    if (!customerFollowerResult || customerFollowerResult[0]?.isActive === false) {
      console.debug("undefined case");
      return;
    }

    if (
      customerFollowerResult[0].isActive === false ||
      customerFollowerResult[0] === undefined
    ) {
      console.debug("is active found");
    }
  }
}


const validateInstance = new Validate1();
validateInstance.process();