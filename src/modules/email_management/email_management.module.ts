/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EmailController } from './email_management.controller';
import { EmailService } from './email_management.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailManagementModule {}
