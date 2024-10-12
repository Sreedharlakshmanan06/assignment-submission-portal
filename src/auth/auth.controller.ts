// src/users/users.controller.ts

import { Controller, Post, Body, UnauthorizedException, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from '../dto/login.dto';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from '../dto/register.dto';

// Controller for handling authentication-related routes
@Controller()
export class AuthController {
  // Injecting the AuthService to handle registration and login logic
  constructor(private readonly authService: AuthService) {}

  // Route for user registration
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    // Calls the register method from AuthService to register a new user
    return this.authService.register(registerDto);
  }

  // Route for user login
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const { profileId, password } = loginDto;

    // Find the user by their profileId
    const user = await this.authService.findByUserId(profileId);
    if (!user) {
      // Throw an exception if the user is not found
      throw new UnauthorizedException('Invalid userId or password');
    }

    // Check if the provided password matches the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      // Throw an exception if the password is invalid
      throw new UnauthorizedException('Invalid userId or password');
    }

    // If login is successful, return user information
    return {
      message: 'Login successful',
      userId: user.profileId,
      role: user.role,
    };
  }
}
