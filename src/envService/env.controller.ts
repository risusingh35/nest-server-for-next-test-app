import { Controller, Get } from '@nestjs/common';
import { EnvService } from './env.service';

@Controller('env')
export class EnvController {
  constructor(private envService: EnvService) {}

  @Get('config')
  getEnvConfig() {
    return this.envService.getEnvConfig();
  }
}
