/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateEmailDto } from './dto/create-email_management.dto';
import { EmailService } from './email_management.service';

@ApiTags('email')
@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post('send')
  @ApiOperation({ summary: 'Send an email' })
  @ApiBody({ type: CreateEmailDto })
  @ApiResponse({ status: 201, description: 'Email sent successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  async sendEmail(@Body() body: CreateEmailDto) {
    const { name, email, message } = body;
    const subject = `New contact from Portfolio Frontend Dev`;
    const text = `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`;
    await this.emailService.sendMail('adalizmembreno@gmail.com', subject, text);
    return { message: 'Email sent successfully' };
  }
}
