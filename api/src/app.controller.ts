import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DaprClient, DaprServer, HttpMethod, CommunicationProtocolEnum } from "dapr-client";
import { HttpService } from '@nestjs/axios';

const client = new DaprClient();

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpClient: HttpService) {}

  @Get('test')
  async getHello(): Promise<any> {
    
    await client.state.save("statestore", [{key: 'test12', value: 'llest'}])
    console.log('here');
    return await client.state.get("statestore",'test12');
    return await client.invoker.invoke("inner","/",HttpMethod.GET);
    //return this.appService.getHello();
  }
}


//dapr run --app-id api --app-port 7000 --dapr-http-port 7100 -- pnpm run start
//dapr run --app-id inner --app-port 6000 --dapr-http-port 6100 -- pnpm run start