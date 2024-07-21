/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateEmailDto } from './create-email_management.dto';

export class UpdateEmailManagementDto extends PartialType(CreateEmailDto) {}
