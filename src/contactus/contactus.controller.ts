import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ContactusService } from './contactus.service';
import { CreateContactusDto } from './dto/create-contactus.dto';
import { UpdateContactusDto } from './dto/update-contactus.dto';

@Controller('contactus')
export class ContactusController {
  constructor(private readonly contactusService: ContactusService) {}

  @Get()
  async findAll() {
    return this.contactusService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.contactusService.findOne(id);
  }

  @Post()
  async create(@Body() createContactusDto: CreateContactusDto) {
    return this.contactusService.create(createContactusDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateContactusDto: UpdateContactusDto) {
    console.log("id",id);
    console.log("updateContactusDto",updateContactusDto);
    
    return this.contactusService.update(id, updateContactusDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.contactusService.remove(id);
  }
}
