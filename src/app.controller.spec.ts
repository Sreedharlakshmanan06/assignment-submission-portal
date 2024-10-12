// Import necessary modules and classes for testing
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller'; // Import the AppController to test
import { AppService } from './app.service'; // Import the AppService, which the controller depends on

// Describe the test suite for the AppController
describe('AppController', () => {
  let appController: AppController; // Declare a variable to hold the controller instance

  // Set up the testing module before each test
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController], // Register the AppController
      providers: [AppService], // Register the AppService as a provider
    }).compile(); // Compile the testing module

    appController = app.get<AppController>(AppController); // Retrieve the AppController instance
  });

  // Describe the test case for the root endpoint
  describe('root', () => {
    it('should return "Hello World!"', () => {
      // Call the getHello method and assert that it returns the expected string
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
