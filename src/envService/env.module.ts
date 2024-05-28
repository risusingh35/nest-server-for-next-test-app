import { Module } from '@nestjs/common';
import { EnvService } from './env.service';
import { EnvController } from './env.controller';

@Module({
  providers: [EnvService],
  controllers: [EnvController],
})
export class EnvModule {}
