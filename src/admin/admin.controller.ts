// src/users/users.controller.ts

import { Controller, Post, Body, UnauthorizedException, Get, Param } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Assignment } from 'src/schemas/assignment.schema';

// Controller for handling admin-related routes
@Controller()
export class AdminController {
  // Injecting the AdminService to handle business logic
  constructor(private readonly adminService: AdminService) {}

  // Route to get all assignments for a specific admin
  // Accepts a parameter 'adminId' to fetch assignments associated with that admin
  @Get('admin/:adminId')
  async getAssignmentsForAdmin(@Param('adminId') adminId: string): Promise<Assignment[]> {
    // Calls the service method to retrieve assignments by admin ID
    return this.adminService.findAllByAdmin(adminId);
  }

  // Route to accept an assignment
  // Accepts a parameter 'id' to specify which assignment to accept
  @Post(':id/accept')
  async acceptAssignment(@Param('id') id: string): Promise<Assignment> {
    // Calls the service method to accept the assignment
    return this.adminService.acceptAssignment(id);
  }

  // Route to reject an assignment
  // Accepts a parameter 'id' to specify which assignment to reject
  @Post(':id/reject')
  async rejectAssignment(@Param('id') id: string): Promise<Assignment> {
    // Calls the service method to reject the assignment
    return this.adminService.rejectAssignment(id);
  }
}
