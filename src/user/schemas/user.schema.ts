import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true,index: true  })// Add index: true to create an index on the email field
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
