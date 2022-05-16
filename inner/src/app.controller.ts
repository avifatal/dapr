import { Controller, Get } from '@nestjs/common';
import { DaprClient } from 'dapr-client';
import { AppService } from './app.service';

const client = new DaprClient();

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<any> {
    const a = await client.state.get("statestore",'test12');
    console.log(a);
    return a;

  }
}
