import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { LoginBody, RegisterBody } from './type/requests';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: RegisterBody): Promise<boolean> {
    await this.authService.register(
      body.fullName,
      body.email,
      body.username,
      body.password,
    );
    return true;
  }

  @Post('login')
  async login(@Body() body: LoginBody): Promise<string> {
    const token = await this.authService.login(body.username, body.password);
    return token;
  }
}
