import { IsString, IsEmail, IsNumber } from 'class-validator';

export class CreateContactusDto {
  @IsString()
  fullName: string;

  @IsEmail()
  companyEmail: string;

  @IsNumber()
  phone: number;

  @IsString()
  message: string;
}
