import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/config/services';

@Controller('auth')
export class AuthController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post('register')
  async registerUser(@Body() body: any) {
    return this.client.send('auth.register.user', {});
  }

  @Post('login')
  async loginUser(@Body() body: any) {
    return this.client.send('auth.login.user', {});
  }

  @Get('verify-token')
  async verifyToken() {
    return this.client.send('auth.verify.token', {});
  }
}
