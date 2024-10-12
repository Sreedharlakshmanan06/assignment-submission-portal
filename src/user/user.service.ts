// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Assignment, AssignmentDocument } from 'src/schemas/assignment.schema';
import { User,UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>, // Correctly injecting User model
        @InjectModel(Assignment.name) private assignmentModel: Model<AssignmentDocument>, // Correctly injecting Assignment model
        private cloudinaryService: CloudinaryService,
    ) {}

  async findAllAdmins(): Promise<User[]> {
    return this.userModel.find({ role: 'Admin' }).exec();
  }

  async uploadAssignment(title: string, description: string, uploadedBy: string,assignedTo: string, filePath: string): Promise<Assignment> {
    // Upload the document to Cloudinary
    const documentUrl = await this.cloudinaryService.uploadDocument(filePath);

    // Create a new assignment
    const createdAssignment = new this.assignmentModel({
      title,
      description,
      profileId: uploadedBy,
      assignedTo: assignedTo,// Replace with actual admin ID if needed
      status: 'Pending',
      documentUrl, // Save the URL to MongoDB
    });

    return createdAssignment.save(); // Save the assignment in MongoDB
  }

}
