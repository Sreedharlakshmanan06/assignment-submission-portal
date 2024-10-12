// src/users/users.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { AssignmentSchema } from 'src/schemas/assignment.schema';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

// Module for admin functionalities
@Module({
  // Importing necessary modules and schemas
  imports: [
    // Configuring Mongoose to use the Assignment schema
    MongooseModule.forFeature([{ name: 'Assignment', schema: AssignmentSchema }]),
  ],
  // Registering the controller for handling incoming requests
  controllers: [AdminController],
  // Providing services for dependency injection
  providers: [AdminService, CloudinaryService]
})
export class AdminModule {}
