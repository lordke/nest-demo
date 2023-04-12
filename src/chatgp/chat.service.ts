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
  async test(question?: string) {
    const { ChatGPTAPI } = await importDynamic('chatgpt');
    const api = new ChatGPTAPI({
      apiKey: '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',
      // apiReverseProxyUrl: 'https://chat.duti.tech/api/conversation',
      // apiReverseProxyUrl: 'https://chatgpt.hato.ai/completions',
      // apiReverseProxyUrl: 'https://chatgpt.pawan.krd/api/completions',
      // apiKey:
      //   'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJrZWppZWNkQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJnZW9pcF9jb3VudHJ5IjoiSlAifSwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS9hdXRoIjp7InVzZXJfaWQiOiJ1c2VyLXNtS0pwZHpyMWZVUGRmeHVsalZzWk1ubCJ9LCJpc3MiOiJodHRwczovL2F1dGgwLm9wZW5haS5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDQ5MDE4Mzg1MDAyNTg2MTU2NjYiLCJhdWQiOlsiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSIsImh0dHBzOi8vb3BlbmFpLm9wZW5haS5hdXRoMGFwcC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjc1OTYxMDQ2LCJleHAiOjE2NzcxNzA2NDYsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb2ZmbGluZV9hY2Nlc3MifQ.0-DAoMPf-GuRRXvROjwSwXPNr6TH0tTf1UMfWDQpM0SnA7dw8myw9JdPlRd4WKMlBWbn71vVovkl3qCwyAA46FghDeyRfW7nVb6Ntg_vvax7BIgG6xHh2JkwIpbFLylRvDE1TqCsmjsGyQrYUVzMNhHqP1j8X7s5MC2bGICM_dJOvmRPrEMtXg_VY_k7W_v8Vc1mu0zn6Oh7l_4iB07Yh7oUkQ30NskjBIBTLvKS5z_H5XwVLM208Xt9quKBnHCm5iKmNCw-lQr1pbwuWcV9yHFuQNAS6Fm9T568SfZc65pNU5OpSIeXQbS9iP3OA7C0cqQvmdDjgOMQ_ezWBWzBGw',
      // completionParams: {
      //   model: 'text-davinci-002-render-sha',
      // },
    });

    const res = await api.sendMessage(question);
    console.log(res.text);
  }
}
