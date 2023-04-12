import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class IpMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const ip =
      req.headers['x-forwarded-for']?.toString().split(', ')[0] ||
      req.socket.remoteAddress;
    // req.ip = ip;
    Reflect.defineProperty(req, 'ip', {
      value: ip,
      writable: true,
      configurable: true,
    });
    next();
  }
}
