// src/assignments/schemas/assignment.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Type definition for the Assignment document
export type AssignmentDocument = Assignment & Document;

// Mongoose schema definition for Assignment
@Schema()
export class Assignment {
  // Title of the assignment; required field
  @Prop({ required: true })
  title: string;

  // Description of the assignment; required field
  @Prop({ required: true })
  description: string;

  // Profile ID of the user who created the assignment; required field
  @Prop({ required: true })
  profileId: string; 

  // User ID to whom the assignment is assigned; required field
  @Prop({ required: true })
  assignedTo: string; 

  // Status of the assignment; defaults to 'Pending'
  @Prop({ default: 'Pending' }) 
  status: string; 

  // URL of the document associated with the assignment; required field
  @Prop({ required: true })
  documentUrl: string; 
}

// Creating the Mongoose schema for Assignment class
export const AssignmentSchema = SchemaFactory.createForClass(Assignment);
