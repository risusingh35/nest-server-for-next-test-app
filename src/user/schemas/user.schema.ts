import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  position: string;
  @Prop({ required: true })
  contact: string;
  @Prop({ required: true })
  status: boolean;

  @Prop({ required: true, unique: true,index: true  })// Add index: true to create an index on the email field
  email: string;

  @Prop({ type: Buffer })
  image: Buffer; 
}

export const UserSchema = SchemaFactory.createForClass(User);
