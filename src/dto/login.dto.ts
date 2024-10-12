// src/users/dto/login.dto.ts

import { IsString, IsNotEmpty } from 'class-validator';

// Data Transfer Object (DTO) for user login
export class LoginDto {
  // Profile ID of the user; must be a non-empty string
  @IsString()
  @IsNotEmpty()
  readonly profileId: string;

  // Password of the user; must be a non-empty string
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
