import { Injectable } from '@nestjs/common';
// import { ChatGPTAPI } from 'chatgpt';
export const importDynamic = new Function(
  'modulePath',
  'return import(modulePath)',
);

async function example() {
  const { ChatGPTAPI } = await importDynamic('chatgpt');
  const api = new ChatGPTAPI({
    apiKey: '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',
  });

  const res = await api.sendMessage('Hello World!');
  console.log(res.text);
}
@Injectable()
export class ChatService {
  getHello(): string {
    return 'Hello World1!';
  }
}
