# NestJS Assignment Submission Portal

This is a NestJS application for an assignment submission portal, which allows users to register, log in, and manage assignments. 

## Table of Contents
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [User Endpoints](#user-endpoints)
  - [Admin Endpoints](#admin-endpoints)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local installation or use MongoDB Atlas)
- [NestJS CLI](https://docs.nestjs.com/cli/overview) (optional)

### Cloning the Repository

Clone the repository to your local machine:

git clone <repository-url>
cd <repository-name>
Running the Application
pnpm install
pnpm start
The application will run on http://localhost:3000.


# API Endpoints

## User Endpoints

### POST /register
### Register a new user.
Request Body:
{
  "profileId": "jake123",
  "password": "Jake@123",
  "role": "Admin"
}

### POST /login
### Log in an existing user.
Request Body:
{
  "profileId": "jake123",
  "password":"Jake@123"
}

### POST /upload
### Upload an assignment document.
### Request Body:
### file: The document file (IMG,PDF, DOCX, etc.)
Request Body (form-data):

title: 	Math Assignment	- Text
description:	Algebra problems	- Text
profileId:	user123	- Text
assignedTo: admin123 - Text
file:	(your document file)	File

### GET /admins
Fetch all admins.

### Admin Endpoints

### To get assignments assignedTo a admin
### GET /admin/:adminId

Note: Replace :adminId  with adminsId (admin123)

### POST /:id/accept 
### Accept an assignment
Note: Replace :id with the id in the response of /admins/:adminId api (This is recordId or documentId)

### POST /:id/reject
### Reject an assignment.
Note: Replace :id with the id in the response of /admins/:adminId api (This is recordId or documentId)