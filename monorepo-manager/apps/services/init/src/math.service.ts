import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  test(data: any): string {
    console.log('data', data);
    return 'hello';
  }
  test2() {
    console.log('hello');
    return 'hello';
  }
}
