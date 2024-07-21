import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailManagementModule } from './modules/email_management/email_management.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), EmailManagementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
