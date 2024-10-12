// src/cloudinary/cloudinary.service.ts

import { Injectable } from '@nestjs/common';
import * as cloudinary from 'cloudinary';

// Injectable service for handling Cloudinary operations
@Injectable()
export class CloudinaryService {
  constructor() {
    // Configuring Cloudinary with cloud name, API key, and API secret
    cloudinary.v2.config({
      cloud_name: 'dytlv52rx', 
      api_key: '627998233398141', 
      api_secret: 'Ik2UUs2PsWSN_dqQ_4mPKKp7jIw',
    });
  }

  // Method to upload a document to Cloudinary
  async uploadDocument(filePath: string): Promise<string> {
    console.log("filePath -->", filePath); // Logging the file path for debugging purposes

    // Uploading the document and determining the resource type automatically
    const result = await cloudinary.v2.uploader.upload(filePath, {
      resource_type: 'auto', // Automatically determine the resource type (image, video, etc.)
    });

    console.log("result -->", result); // Logging the result of the upload for debugging purposes
    return result.secure_url; // Returning the secure URL of the uploaded document
  }
}
