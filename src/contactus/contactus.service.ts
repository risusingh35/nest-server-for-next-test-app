import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contactus } from './schemas/contactus.schema';
import { CreateContactusDto } from './dto/create-contactus.dto';
import { UpdateContactusDto } from './dto/update-contactus.dto';

@Injectable()
export class ContactusService {
  constructor(@InjectModel(Contactus.name) private ContactusModel: Model<Contactus>) {}

  async findAll(): Promise<Contactus[]> {
    return this.ContactusModel.find().exec();
  }

  async findOne(id: string): Promise<Contactus> {
    const user = await this.ContactusModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`Contactus with ID ${id} not found`);
    }
    return user;
  }

  async create(createContactusDto: CreateContactusDto): Promise<Contactus> {
    const newContactus = new this.ContactusModel(createContactusDto);
    return newContactus.save();
  }

  async update(id: string, updateContactusDto: UpdateContactusDto): Promise<Contactus> {
    const existingContactus = await this.ContactusModel.findByIdAndUpdate({_id:id}, updateContactusDto, { new: true }).exec();
    if (!existingContactus) {
      throw new NotFoundException(`Contactus with ID ${id} not found`);
    }
    return existingContactus;
  }

  async remove(id: string): Promise<Contactus> {
    const deletedContactus = await this.ContactusModel.findOneAndDelete({ _id: id }).exec();
    if (!deletedContactus) {
      throw new NotFoundException(`Contactus with ID ${id} not found`);
    }
    return deletedContactus;
}

}
