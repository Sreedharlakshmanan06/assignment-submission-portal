// src/assignments/assignments.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// Importing Assignment and AssignmentDocument from the schema
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { Assignment, AssignmentDocument } from 'src/schemas/assignment.schema';

// Injectable service for handling assignment operations
@Injectable()
export class AdminService {
  // Constructor injecting the Assignment model and CloudinaryService
  constructor(
    @InjectModel(Assignment.name) private assignmentModel: Model<AssignmentDocument>,
    private cloudinaryService: CloudinaryService
  ) {}

  // Method to find all assignments assigned to a specific admin
  async findAllByAdmin(adminId: string): Promise<Assignment[]> {
    return this.assignmentModel.find({ assignedTo: adminId }).exec(); // Fetching assignments from the database
  }

  // Method to accept an assignment by its ID
  async acceptAssignment(id: string): Promise<Assignment> {
    return this.assignmentModel.findByIdAndUpdate(id, { status: 'Accepted' }, { new: true }).exec(); // Updating assignment status to 'Accepted'
  }

  // Method to reject an assignment by its ID
  async rejectAssignment(id: string): Promise<Assignment> {
    return this.assignmentModel.findByIdAndUpdate(id, { status: 'Rejected' }, { new: true }).exec(); // Updating assignment status to 'Rejected'
  }
}
