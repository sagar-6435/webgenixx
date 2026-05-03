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
    app.enableCors();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe());
    
    // Static files for uploads (Note: persistent storage is needed for Vercel)
    app.use('/uploads', express.static(join(process.cwd(), 'uploads')));
    
    // Initialize the app
    await app.init();
    
    // Get the underlying express instance
    cachedApp = app.getHttpAdapter().getInstance();
  }
  
  // Forward the request to the express instance
  return cachedApp(req, res);
}
