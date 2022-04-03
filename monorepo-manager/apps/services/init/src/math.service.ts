import { Injectable } from "@nestjs/common";

@Injectable()
export class MathService {
    
    constructor(){}

    test(data: any): string {
        console.log('data', data)
        return "hello";
    }
    test2() {
        console.log('hello')
        return "hello"
    }

}
