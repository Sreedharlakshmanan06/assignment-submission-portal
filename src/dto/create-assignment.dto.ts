import { IsNotEmpty, IsString } from 'class-validator';

// Data Transfer Object (DTO) for creating an assignment
export class CreateAssignmentDto {
  // Title of the assignment; must be a non-empty string
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  // Description of the assignment; must be a non-empty string
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  // Profile ID of the user creating the assignment; must be a non-empty string
  @IsString()
  @IsNotEmpty()
  readonly profileId: string;

  // ID of the user to whom the assignment is assigned; must be a non-empty string
  @IsString()
  @IsNotEmpty()
  readonly assignedTo: string;
}
