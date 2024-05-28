import { IsString, IsEmail, IsOptional, IsNumber } from 'class-validator';

export class UpdateContactusDto {
  @IsString()
  @IsOptional()
  fullName: string;

  @IsEmail()
  @IsOptional()
  companyEmail: string;

  @IsNumber()
  @IsOptional()
  phone: number;

  @IsString()
  @IsOptional()
  message: string;
}
