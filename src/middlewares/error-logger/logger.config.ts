// src/middlewares/logger.config.ts
import { join } from 'path';
import { createLogger, format, transports } from 'winston';

const getDate = (): string => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (`0${date.getMonth() + 1}`).slice(-2);
    const day = (`0${date.getDate()}`).slice(-2);
    return `${year}-${month}-${day}`;
};

export const logger = createLogger({
    level: 'error',
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf(({ timestamp, level, message }) => `${timestamp} - ${level.toUpperCase()}: ${message}`)
    ),
    transports: [
        new transports.File({ filename: join(__dirname, `../../logs/error-${getDate()}.log`) }),
    ],
});
