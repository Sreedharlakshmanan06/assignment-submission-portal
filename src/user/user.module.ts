// src/users/users.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { User, UserSchema } from 'src/schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { Assignment, AssignmentSchema } from 'src/schemas/assignment.schema';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  // Importing necessary modules for the Users module
  imports: [
    // Configuring Mongoose to use the User and Assignment schemas
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Assignment.name, schema: AssignmentSchema }
    ]),
    // Registering the JWT module for authentication
    JwtModule.register({}),
  ],
  // Providing services that can be injected into controllers
  providers: [
    UsersService, // Service to handle user-related business logic
    CloudinaryService // Service for handling file uploads to Cloudinary
  ],
  // Controllers for handling incoming requests
  controllers: [UsersController],
})
export class UsersModule {}
