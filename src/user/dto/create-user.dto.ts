import { IsString, IsEmail ,IsBoolean} from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  role: string;

  @IsString()
  contact: string;

  @IsBoolean()
  status: boolean;

  image?: Buffer; 
}
