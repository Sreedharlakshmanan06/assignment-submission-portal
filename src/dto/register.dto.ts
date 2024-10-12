// src/users/dto/create-user.dto.ts

import { IsString, Matches, MinLength, IsIn } from 'class-validator';

// Data Transfer Object (DTO) for user registration
export class RegisterDto {
  // Profile ID of the user; must be a string
  @IsString()
  readonly profileId: string;

  // Password of the user; must be a string with specific validation rules
  @IsString()
  @MinLength(7) // Password must be at least 7 characters long
  @Matches(/.*[A-Z].*/, { message: 'Password must contain at least one uppercase letter' }) // At least one uppercase letter
  @Matches(/.*[a-z].*/, { message: 'Password must contain at least one lowercase letter' }) // At least one lowercase letter
  @Matches(/.*\W.*/, { message: 'Password must contain at least one special character' }) // At least one special character
  readonly password: string;

  // Role of the user; must be either 'User' or 'Admin'
  @IsString()
  @IsIn(['User', 'Admin'], { message: 'Role must be either User or Admin' }) // Role validation
  readonly role: string;
}
