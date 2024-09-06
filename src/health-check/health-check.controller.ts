import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HealthCheckController {
  @Get()
  healthCheck() {
    return { message: 'Client Gateway Microservice up and running' };
  }
}
