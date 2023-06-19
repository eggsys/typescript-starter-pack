class Demo {
    constructor() {
        
    }

    public async process(): Promise<void> {
        const request = await this.mockRequest();
        console.log("first request result : ", request);
        if (request === false) {
            await this.backOffRequest();
        }
    }

    public async mockRequest(): Promise<boolean>{
        
        const number = Math.floor((Math.random() * 100) + 1);
        if (number % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    public async backOffRequest(): Promise<any>{
        console.log("go to backOffRequest");
        let backOffTime = 1;
        while (backOffTime <= 60) {
            await new Promise(f => setTimeout(f, backOffTime * 1000));
            const result = await this.mockRequest();
            if (result === true) {
                console.log("its done");
                break;
            } else {
                backOffTime *= 2;
                console.log("request limit ! wait for :", backOffTime);
            }
        }
    }
}


const d = new Demo();
d.process();