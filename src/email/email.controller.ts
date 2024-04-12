import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('api/v1/envio-email')
  async email(@Body('email') email: string) {
    try {
      await this.emailService.createEmail(email);
      return { message: 'Email enviado com sucesso!' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}