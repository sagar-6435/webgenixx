import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(password: string) {
    const adminPassword = this.configService.get<string>('ADMIN_PASSWORD') || 'admin123';
    
    // In a real app, you'd fetch from DB, but for this requirement:
    if (password === adminPassword) {
      const payload = { role: 'admin' };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    
    throw new UnauthorizedException('Invalid credentials');
  }
}
