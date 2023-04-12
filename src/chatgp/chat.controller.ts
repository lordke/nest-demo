import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  Request,
} from '@nestjs/common';
import { ChatService } from './chat.service';

interface IQuery {
  q: string;
}

interface IBody {
  question: string;
  ua: string;
}
@Controller('/chat')
export class ChatController {
  constructor(private readonly appService: ChatService) {}

  // @Get('/hello')
  // async getHello(@Query() query: IQuery) {
  //   const q = query.q;
  //   await this.appService.test(q);
  //   return this.appService.getHello();
  // }
  @Post('/next')
  async log(@Body() data: IBody, @Req() request: Request) {
    const ip = (request as any)?.ip;

    // console.log('[body]', data, ip);
    // const q = query.q;
    // await this.appService.test(q);
    // return this.appService.getHello();
  }
}
