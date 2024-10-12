// src/users/schemas/user.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Type definition for the User document
export type UserDocument = User & Document;

// Mongoose schema definition for User
@Schema()
export class User {
  // Profile ID of the user; required field
  @Prop({ required: true })
  profileId: string;

  // Password of the user; required field
  @Prop({ required: true })
  password: string;

  // Role of the user; must be either 'User' or 'Admin'
  @Prop({ required: true, enum: ['User', 'Admin'] })
  role: string;
}

// Creating the Mongoose schema for the User class
export const UserSchema = SchemaFactory.createForClass(User);
