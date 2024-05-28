
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import {EnvModule  } from "./envService/env.module";
import { ContactusModule } from './contactus/contactus.module';
@Module({
  imports: [
     ConfigModule.forRoot({
    isGlobal: true, // Makes the module globally available
  }),
  
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      uri: configService.get<string>('MONGODB_URI'),
    }),
    inject: [ConfigService],
  }),
  UserModule,
  EnvModule,
  ContactusModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
