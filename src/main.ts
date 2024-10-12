// Import necessary classes from NestJS
import { ValidationPipe } from '@nestjs/common'; // For validating incoming requests
import { NestFactory } from '@nestjs/core'; // To create the Nest application instance
import { AppModule } from './app.module'; // Import the root module of your application

// Define an asynchronous function to bootstrap the application
async function bootstrap() {
  // Create a Nest application using the AppModule
  const app = await NestFactory.create(AppModule);

  // Use global validation pipes to automatically validate incoming requests
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Strips out properties that are not defined in the DTOs
    forbidNonWhitelisted: true, // Throws an error if non-whitelisted properties are present
    transform: true, // Automatically transforms payloads to the DTO instances
  }));

  // Start listening on port 3000
  await app.listen(3000);
}

// Call the bootstrap function to start the application
bootstrap();
