import { Controller, Post, Put,Get,Delete, Param, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    console.log('get user all');
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(@Body() createUserDto: CreateUserDto,    @UploadedFile() file: Express.Multer.File,) {
    console.log('post user create');
    console.log('file', file);
    console.log('createUserDto', createUserDto);
    
    if (file) {
      createUserDto['image'] = file.buffer;
    }
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log('id', id);
    console.log('updateUserDto', updateUserDto);
    console.log('file', file);
    if (file) {
      updateUserDto['image'] = file.buffer;
    }

    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
