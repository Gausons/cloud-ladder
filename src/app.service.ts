import { Injectable } from '@nestjs/common';
import { TestService } from './test.service';

@Injectable()
export class AppService {
  constructor( private readonly testService: TestService) {
    testService.getHello()
  }

  getHello(): string {
    return this.testService.getHello()
  }
}
