import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';

import { getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

// Variable to cache the NestJS app instance
let cachedApp: any;

export default async function handler(req: any, res: any) {
  console.log(`[${req.method}] ${req.url} - Request received`);

  // Direct health check to verify if the Vercel function is alive
  if (req.url === '/api/health') {
    return res.status(200).json({ status: 'ok', message: 'Vercel function is alive' });
  }

  if (!cachedApp) {
    try {
      console.log('Starting NestJS initialization...');
      const app = await NestFactory.create(AppModule, { logger: ['error', 'warn', 'log'] });
      
      console.log('Configuring middleware...');
      app.enableCors({
        origin: true,
        credentials: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type,Accept,Authorization',
      });
      app.setGlobalPrefix('api');
      app.use(express.json({ limit: '10mb' }));
      app.use(express.urlencoded({ limit: '10mb', extended: true }));
      app.useGlobalPipes(new ValidationPipe());
      
      console.log('Initializing NestJS app...');
      await app.init();

      // Check Database Connection
      const connection = app.get<Connection>(getConnectionToken());
      console.log('Database connection state:', connection.readyState === 1 ? 'CONNECTED' : 'DISCONNECTED');
      
      cachedApp = app.getHttpAdapter().getInstance();
      console.log('NestJS initialization complete.');
    } catch (err) {
      console.error('NestJS initialization failed:', err);
      return res.status(500).json({ error: 'Failed to initialize backend', details: err.message });
    }
  }
  
  // Forward the request to the express instance
  try {
    return cachedApp(req, res);
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).send('Internal Server Error');
  }
}
