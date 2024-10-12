// src/users/users.service.ts

import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from '../dto/register.dto';
import { User, UserDocument } from 'src/schemas/user.schema';

// Injectable service for handling user authentication and registration
@Injectable()
export class AuthService {
  // Injecting the User model for database operations
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // Method to register a new user
  async register(registerDto: RegisterDto): Promise<User> {
    const { profileId, password, role, ...rest } = registerDto;

    // Check if a user with the same profileId already exists
    const existingUser = await this.findByUserId(profileId);
    if (existingUser) {
      // Throw a conflict exception if the user is already registered
      throw new ConflictException(`${role} already registered, please login`);
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance with the provided data
    const createdUser = new this.userModel({
      ...rest,
      password: hashedPassword,
    });

    // Save the new user to the database and return the created user
    return createdUser.save();
  }

  // Method to find a user by their profile ID
  async findByUserId(profileId: string): Promise<User | undefined> {
    // Queries the user model for a user with the given profile ID
    return this.userModel.findOne({ profileId }).exec();
  }
}
