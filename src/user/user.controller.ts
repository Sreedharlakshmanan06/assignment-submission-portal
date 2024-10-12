// src/users/users.controller.ts

import { 
  Controller, 
  Post, 
  Body,
  Get, 
  UseInterceptors, 
  UploadedFile, 

} from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from 'src/schemas/user.schema';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CreateAssignmentDto } from 'src/dto/create-assignment.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Endpoint to retrieve all admin users
  @Get('admins')
  async getAllAdmins(): Promise<User[]> {
    return this.usersService.findAllAdmins(); // This method needs to be implemented in UsersService
  }
  
  // Endpoint for uploading an assignment with a file
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads', // Directory for storing uploaded files
        filename: (req, file, cb) => {
          // Generate a unique file name based on the current timestamp and a random number
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
          cb(null, file.fieldname + '-' + uniqueSuffix + extname(file.originalname)); // Append the original file extension
        },
      }),
    }),
  )
  async upload(
    @UploadedFile() file: Express.Multer.File, // The uploaded file
    @Body() createAssignmentDto: CreateAssignmentDto // Data for the assignment
  ) {
    const { title, description, profileId, assignedTo } = createAssignmentDto;

    // Use the file path for upload and create an assignment
    const assignment = await this.usersService.uploadAssignment(title, description, profileId, assignedTo, file.path);
    
    return assignment; // Return the created assignment
  }
}
