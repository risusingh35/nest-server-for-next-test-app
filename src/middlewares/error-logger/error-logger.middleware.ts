// src/middlewares/error-logger.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { logger } from './logger.config';

@Injectable()
export class ErrorLoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        res.on('finish', () => {
            if (res.statusCode >= 400) {
                logger.error(`${req.method} ${req.originalUrl} - Status: ${res.statusCode}`);
            }
        });
        next();
    }
}
