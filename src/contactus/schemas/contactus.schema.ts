import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Contactus extends Document {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true,index: true  })
  companyEmail: string;

  @Prop({ required: true })
  message: string;

  @Prop({ required: true })
  phone: number;
}

export const ContactusSchema = SchemaFactory.createForClass(Contactus);

// @IsString()
// @IsOptional()
// fullName: string;

// @IsEmail()
// @IsOptional()
// companyEmail: string;

// @IsNumber()
// @IsOptional()
// phone: number;

// @IsString()
// @IsOptional()
// message: string;