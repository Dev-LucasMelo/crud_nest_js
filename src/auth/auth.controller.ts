import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto } from './validations/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("/login")
  @HttpCode(200)
  async login(@Body() dados: loginDto) {
    return await this.authService.login(dados)
  }

}
