import { Controller, Post } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { MathService } from './math.service';

@Controller()
export class MathController {
  constructor(private readonly mathService: MathService) {}

  @EventPattern('sum')
  Test(data) {
    this.mathService.test(data);
  }

  @MessagePattern({ cmd: 'get_analytics' })
  getAnalytics() {
    console.log('ss');
    return this.mathService.test2();
  }
}
