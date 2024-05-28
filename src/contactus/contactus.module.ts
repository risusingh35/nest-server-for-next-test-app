import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactusService } from './contactus.service';
import { ContactusController } from './contactus.controller';
import { Contactus, ContactusSchema } from './schemas/contactus.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Contactus.name, schema: ContactusSchema }])],
  providers: [ContactusService],
  controllers: [ContactusController],
})
export class ContactusModule {}
