import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 4001; // Default to 3000 if PORT is not defined
  app.enableCors();
  await app.listen(port,()=>{
    console.log(`Server Running http://localhost:${port}/`);
    
  });
}
bootstrap();
