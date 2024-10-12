// src/assignments/assignments.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { Assignment, AssignmentDocument } from 'src/schemas/assignment.schema';

// Injectable service for handling assignment-related operations
@Injectable()
export class AdminService {
  // Injecting the Assignment model and CloudinaryService for use in this service
  constructor(
    @InjectModel(Assignment.name) private assignmentModel: Model<AssignmentDocument>,
    private cloudinaryService: CloudinaryService
  ) {}

  // Method to retrieve all assignments assigned to a specific admin
  async findAllByAdmin(adminId: string): Promise<Assignment[]> {
    // Queries the assignment model for assignments associated with the given admin ID
    return this.assignmentModel.find({ assignedTo: adminId }).exec();
  }

  // Method to accept an assignment
  async acceptAssignment(id: string): Promise<Assignment> {
    // Updates the assignment status to 'Accepted' and returns the updated assignment
    return this.assignmentModel.findByIdAndUpdate(id, { status: 'Accepted' }, { new: true }).exec();
  }

  // Method to reject an assignment
  async rejectAssignment(id: string): Promise<Assignment> {
    // Updates the assignment status to 'Rejected' and returns the updated assignment
    return this.assignmentModel.findByIdAndUpdate(id, { status: 'Rejected' }, { new: true }).exec();
  }
}
