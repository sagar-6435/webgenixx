import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';

// Variable to cache the NestJS app instance
let cachedApp: any;

export default async function handler(req: any, res: any) {
  if (!cachedApp) {
    // Create the NestJS app
    const app = await NestFactory.create(AppModule);
    
    // Configure the app (mirroring main.ts)
    app.enableCors({
      origin: ['https://thewebgenixx.vercel.app', 'http://localhost:3000'],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    });
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe());
    
    // Static files for uploads (Note: persistent storage is needed for Vercel)
    app.use('/uploads', express.static(join(process.cwd(), 'uploads')));
    
    // Ensure we have a database URI
    if (!process.env.MONGODB_URI) {
      console.warn('MONGODB_URI is not defined in environment variables');
    }

    // Initialize the app
    await app.init();
    
    // Get the underlying express instance
    cachedApp = app.getHttpAdapter().getInstance();
  }
  
  // Forward the request to the express instance
  try {
    return cachedApp(req, res);
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).send('Internal Server Error');
  }
}
