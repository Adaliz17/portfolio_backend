/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmailDto {
  @ApiProperty({ description: 'The name of the person sending the email' })
  name: string;

  @ApiProperty({
    description: 'The email address of the person sending the email',
  })
  email: string;

  @ApiProperty({ description: 'The message content of the email' })
  message: string;
}
