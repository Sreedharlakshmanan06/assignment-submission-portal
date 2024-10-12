import { Module } from '@nestjs/common'; // Import the Module decorator
import { AppController } from './app.controller'; // Import the main app controller
import { AppService } from './app.service'; // Import the main app service
import { UsersModule } from './user/user.module'; // Import the Users module
import { MongooseModule } from '@nestjs/mongoose'; // Import MongooseModule for MongoDB integration
import { AdminModule } from './admin/admin.module'; // Import the Admin module
import { AuthModule } from './auth/auth.module'; // Import the Auth module

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://sreedharlakshmanan06:sree1234@assignment.5dlqg.mongodb.net/Assignment'), // Connect to MongoDB
    UsersModule, // Include the Users module
    AdminModule, // Include the Admin module
    AuthModule, // Include the Auth module
  ],
  controllers: [AppController], // Register the main app controller
  providers: [AppService], // Register the main app service
})

// Export the AppModule class
export class AppModule {}



