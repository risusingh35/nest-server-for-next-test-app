import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvService {
    constructor(private configService: ConfigService) { }

    getEnvConfig() {
        const server_port = this.configService.get<string>('PORT');
        const host = this.configService.get<string>('DATABASE_HOST');
        const port = this.configService.get<number>('DATABASE_PORT');
        const user = this.configService.get<string>('DATABASE_USER');
        const password = this.configService.get<string>('DATABASE_PASSWORD');
        const name = this.configService.get<string>('DATABASE_NAME');

        return {
            server_port,
            host,
            port,
            user,
            password,
            name,
        };
    }
}
